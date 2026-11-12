import React, { useState } from "react";
import { FAQ_LIST } from "../data/courseData";

interface FAQSectionProps {
  onScrollToPlans: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onScrollToPlans }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-8 sm:py-10 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1924] tracking-tight">
            Perguntas <span className="text-[#7843B3]">Frequentes</span>
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 mb-10">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#E6D5FA] border border-[#D5B8F7] rounded-2xl overflow-hidden transition-all shadow-xs hover:border-[#C497EE]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#331C44]">
                    {item.question}
                  </span>
                  <span
                    className={`text-[#7843B3] text-xs font-bold transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-2 text-xs sm:text-sm text-[#331C44] leading-relaxed border-t border-[#D5B8F7]/70 bg-white/60 font-medium">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA verde com link direto para o WhatsApp */}
        <div className="text-center">
          <a
            href="https://wa.me/5551992613647"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm sm:text-base font-black text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-xl shadow-lg uppercase tracking-wider cursor-pointer border-b-4 border-[#14532D]"
          >
            quero garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
};
