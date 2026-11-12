import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/courseData';

interface FAQProps {
  onOpenWhatsApp: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Respostas diretas para as dúvidas mais comuns de quem está pensando em dar os primeiros passos na costura.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl overflow-hidden transition-colors hover:border-[#D1C6B7]"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C4334]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#2C2725]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F2ECE3] text-[#5C534E] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#8C4334] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5C534E] leading-relaxed border-t border-[#EBE5DC]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-6 bg-[#F5EFE9] border border-[#DFD5C8] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-base font-bold text-[#2C2725] mb-1">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-xs text-[#6B615B]">
              A professora responde suas perguntas sobre horários, experiência ou matérias diretamente no WhatsApp.
            </p>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] rounded-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar Dúvida no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
