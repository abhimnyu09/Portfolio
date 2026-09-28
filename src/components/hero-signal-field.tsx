import { useEffect, useRef } from "react";

type SignalNode = {
  x: number;
  y: number;
  phase: number;
  speed: number;
  radius: number;
};

export function HeroSignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = getComputedStyle(document.documentElement);
    const amber = palette.getPropertyValue("--primary").trim();
    const jade = palette.getPropertyValue("--accent-2").trim();
    const ink = palette.getPropertyValue("--foreground").trim();
    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    let width = 0;
    let height = 0;
    let nodes: SignalNode[] = [];
    let animationFrame = 0;
    let visible = true;

    const buildNodes = () => {
      const count = Math.max(34, Math.min(76, Math.floor(width / 18)));
      nodes = Array.from({ length: count }, (_, index) => {
        const angle = index * 2.399963;
        const spread = Math.sqrt((index + 1) / count);
        const focusX = width * 0.72;
        const focusY = height * 0.48;
        return {
          x: focusX + Math.cos(angle) * spread * width * 0.5,
          y: focusY + Math.sin(angle) * spread * height * 0.58,
          phase: index * 0.83,
          speed: 0.45 + (index % 7) * 0.06,
          radius: index % 9 === 0 ? 2.2 : 1.15,
        };
      });
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      buildNodes();
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);
      const time = reduceMotion ? 0 : now / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.055;
      pointer.y += (pointer.targetY - pointer.y) * 0.055;

      const positions = nodes.map((node) => ({
        x: node.x + Math.cos(time * node.speed + node.phase) * 13,
        y: node.y + Math.sin(time * node.speed * 0.8 + node.phase) * 10,
      }));

      for (let i = 0; i < positions.length; i += 1) {
        const start = positions[i];
        if (!start) continue;
        for (let j = i + 1; j < positions.length; j += 1) {
          const end = positions[j];
          if (!end) continue;
          const distance = Math.hypot(start.x - end.x, start.y - end.y);
          if (distance > 128) continue;
          context.beginPath();
          context.moveTo(start.x, start.y);
          context.lineTo(end.x, end.y);
          context.strokeStyle = (i + j) % 5 === 0 ? jade : amber;
          context.globalAlpha = (1 - distance / 128) * 0.14;
          context.lineWidth = 0.7;
          context.stroke();
        }
      }

      positions.forEach((position, index) => {
        const node = nodes[index];
        if (!node) return;
        const distanceToPointer = Math.hypot(position.x - pointer.x, position.y - pointer.y);
        const isNear = distanceToPointer < 180;
        if (isNear) {
          context.beginPath();
          context.moveTo(position.x, position.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = index % 3 === 0 ? jade : amber;
          context.globalAlpha = (1 - distanceToPointer / 180) * 0.32;
          context.lineWidth = 0.85;
          context.stroke();
        }

        const pulse = 0.65 + Math.sin(time * 1.6 + node.phase) * 0.35;
        context.beginPath();
        context.arc(position.x, position.y, node.radius + (isNear ? 0.9 : 0), 0, Math.PI * 2);
        context.fillStyle = index % 4 === 0 ? jade : index % 3 === 0 ? ink : amber;
        context.globalAlpha = (index % 9 === 0 ? 0.72 : 0.34) * pulse;
        context.fill();
      });

      if (pointer.x > 0 && pointer.x < width && pointer.y > 0 && pointer.y < height) {
        const ripple = 34 + ((time * 18) % 56);
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 130);
        glow.addColorStop(0, amber);
        glow.addColorStop(1, "transparent");
        context.fillStyle = glow;
        context.globalAlpha = 0.055;
        context.beginPath();
        context.arc(pointer.x, pointer.y, 130, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = jade;
        context.globalAlpha = 0.12 * (1 - (ripple - 34) / 56);
        context.lineWidth = 1;
        context.beginPath();
        context.arc(pointer.x, pointer.y, ripple, 0, Math.PI * 2);
        context.stroke();
      }

      context.globalAlpha = 1;
      if (!reduceMotion && visible) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
    };
    const onPointerLeave = () => {
      pointer.targetX = width * 0.74;
      pointer.targetY = height * 0.48;
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      cancelAnimationFrame(animationFrame);
      if (visible) animationFrame = requestAnimationFrame(draw);
    });

    resizeObserver.observe(host);
    visibilityObserver.observe(host);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    resize();
    pointer.targetX = width * 0.74;
    pointer.targetY = height * 0.48;
    draw(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />;
}