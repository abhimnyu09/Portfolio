import { useEffect, useRef } from "react";
import type { CaseStudy } from "@/content/portfolio";

export function FlowDiagram({ steps, title }: { steps: CaseStudy["flow"]; title: string }) {
  return (
    <figure aria-label={title}>
      <figcaption className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">{title}</figcaption>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 pb-4 last:pb-0">
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="absolute top-7 bottom-0 left-[13px] w-px bg-gradient-to-b from-primary/50 to-accent-2/30" />
            ) : null}
            <span className="relative z-10 grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 bg-background font-mono text-[11px] text-primary">
              {index + 1}
            </span>
            <div className="min-w-0 rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-2">
              <p className="text-sm font-medium">{step.label}</p>
              {step.note ? <p className="text-xs text-muted-foreground">{step.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function CaseStudyDialog({ study, onClose }: { study: CaseStudy | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (study && !dialog.open) dialog.showModal();
    if (!study && dialog.open) dialog.close();
  }, [study]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      aria-labelledby="case-study-title"
      className="case-study-dialog m-auto max-h-[90vh] w-[min(56rem,calc(100vw-1.5rem))] overflow-y-auto rounded-2xl border border-foreground/10 bg-card p-0 text-foreground"
    >
      {study ? (
        <div className="p-6 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest text-primary uppercase">{study.eyebrow}</p>
              <h2 id="case-study-title" className="mt-2 font-display text-2xl font-bold tracking-tight md:text-4xl">
                {study.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-foreground/15 px-3 py-1.5 text-sm transition hover:bg-foreground/5"
              aria-label="Close case study"
            >
              Close
            </button>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_18rem]">
            <div className="space-y-6">
              {study.sections.map((section) => (
                <section key={section.label}>
                  <h3 className="text-xs tracking-widest text-accent-2 uppercase">{section.label}</h3>
                  {Array.isArray(section.body) ? (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {section.body.map((item) => (
                        <li key={item} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{section.body}</p>
                  )}
                </section>
              ))}
              {study.concepts ? (
                <section>
                  <h3 className="text-xs tracking-widest text-accent-2 uppercase">Concepts</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {study.concepts.map((c) => (
                      <li key={c} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
            <FlowDiagram steps={study.flow} title={study.flowTitle} />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6">
            <p className="text-xs text-muted-foreground">{study.stack.join(" · ")}</p>
            {study.href ? (
              <a href={study.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:brightness-125">
                View on GitHub →
              </a>
            ) : null}
          </div>
          {study.confidentialNote ? <p className="mt-4 text-xs text-muted-foreground italic">{study.confidentialNote}</p> : null}
        </div>
      ) : null}
    </dialog>
  );
}
