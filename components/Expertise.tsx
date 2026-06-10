"use client";

import { useState } from "react";
import ExpertiseModal from "@/components/ExpertiseModal";
import { expertise, type ExpertiseItem } from "@/lib/site-data";

function PlusButton({ active }: { active?: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-lg font-light leading-none text-background transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90 ${active ? "rotate-90" : ""}`}
      aria-hidden="true"
    >
      +
    </span>
  );
}

export default function Expertise() {
  const [activeItem, setActiveItem] = useState<ExpertiseItem | null>(null);

  const openModal = (item: ExpertiseItem) => setActiveItem(item);
  const closeModal = () => setActiveItem(null);

  return (
    <section className="border-b border-border bg-white" id="expertise">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          {expertise.title}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.items.map((item) => (
            <article
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => openModal(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal(item);
                }
              }}
              className="group flex cursor-pointer flex-col rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium text-muted">
                  ({item.number})
                </span>
                <PlusButton active={activeItem?.id === item.id} />
              </div>
              <h3 className="mt-8 text-lg font-bold uppercase tracking-tight md:text-xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.preview}
              </p>
            </article>
          ))}
        </div>
      </div>

      <ExpertiseModal item={activeItem} onClose={closeModal} />
    </section>
  );
}
