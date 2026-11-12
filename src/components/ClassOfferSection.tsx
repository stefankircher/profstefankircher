import React from "react";
import { Check } from "lucide-react";
import { ScheduleClass } from "../data/courseData";

interface ClassOfferSectionProps {
  onOpenEnroll: (cls?: ScheduleClass) => void;
}

export const ClassOfferSection: React.FC<ClassOfferSectionProps> = ({ onOpenEnroll }) => {
  const inclusions = [
    "4 aulas presenciais por mês( 2h por aula) no Bairro Azenha.",
    "Bancada e máquina individual de alta qualidade.",
    "Acompanhamento 100% personalizado pelo Prof. Stefan.",
    "Sem necessidade de trazer equipamento próprio.",
  ];

  return (
    <section className="py-10 sm:py-14 relative" id="turmas-e-valores">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header do Bloco de Oferta */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-3">
            Benefícios e <span className="text-[#7843B3]">investimento</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed font-medium">
            Turmas reduzidas e <strong className="font-bold text-[#111827]">atenção individualizada para você aprender na prática, no seu ritmo</strong> e com total segurança.
          </p>
        </div>

        {/* Card Principal de Oferta e Valores */}
        <div className="bg-[#FAF8F5] border-2 border-[#E5DECE] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* O que está incluído */}
          <div className="mb-7">
            <h3 className="text-base sm:text-lg font-black text-[#111827] uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] inline-block" />
              O que está incluído na sua inscrição:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-white border border-[#E8DFD1] rounded-xl shadow-xs"
                >
                  <div className="w-6 h-6 rounded-md bg-[#16A34A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1F1924] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco de Investimento */}
          <div className="bg-[#F4ECE1] border border-[#E3D4C1] rounded-2xl p-4 sm:p-6 text-center mb-7">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1.5">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
                💰 Investimento:
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#7843B3] tracking-tight">
                  R$ 100
                </span>
                <span className="text-sm sm:text-lg font-bold text-[#6B7280]">
                  / aula
                </span>
              </div>
            </div>
            <div className="text-[11px] sm:text-sm font-semibold text-[#6B7280] whitespace-nowrap overflow-hidden">
              (Sem taxa de adesão ou fidelidade longa)
            </div>
          </div>

          {/* Botão CTA Verde com link direto para o WhatsApp */}
          <div className="text-center">
            <a
              href="https://wa.me/5551992613647"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenEnroll()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm sm:text-base font-black text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-xl shadow-lg uppercase tracking-wider cursor-pointer border-b-4 border-[#14532D]"
            >
              quero aproveitar a oportunidade
            </a>
            <div className="text-xs text-[#7843B3] font-semibold mt-3">
              Vagas Limitadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
