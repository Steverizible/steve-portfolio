"use client";

import { useState } from "react";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { faq } from "@/lib/site-data";

export default function FAQ() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  const visibleItems = activeTopic
    ? faq.items.filter((item) => item.topicId === activeTopic)
    : faq.items;

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="border-b border-border" id="faq">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <RevealHeading className="text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
          {faq.title}
        </RevealHeading>

        <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTopic(null)}
            className={`faq-topic rounded-full border border-border px-3 py-1 text-xs font-medium ${
              activeTopic === null ? "is-active" : "text-muted"
            }`}
          >
            All
          </button>
          {faq.topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => {
                setActiveTopic(topic.id);
                const first = faq.items.find((item) => item.topicId === topic.id);
                setOpenId(first?.id ?? null);
              }}
              className={`faq-topic rounded-full border border-border px-3 py-1 text-xs font-medium ${
                activeTopic === topic.id ? "is-active" : "text-muted"
              }`}
            >
              {topic.label}
            </button>
          ))}
        </RevealOnScroll>

        <div className="mt-12 divide-y divide-border border-y border-border lg:px-24">
          {visibleItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <RevealOnScroll
                key={item.id}
                as="div"
                delayMs={index * 40}
                className="faq-item"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(item.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-medium md:py-6"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <span
                    className={`shrink-0 text-muted transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="faq-answer-inner" style={{ opacity: isOpen ? 1 : 0 }}>
                    <p className="pb-5 text-sm leading-relaxed text-muted md:pb-6 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}

          {visibleItems.length === 0 && (
            <p className="py-8 text-center text-sm text-muted">
              No questions in this topic yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
