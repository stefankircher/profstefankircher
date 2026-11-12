import React from 'react';
import { Check, X } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section id="para-quem" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Qualificação do Aluno
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Para Quem É (E Para Quem Não É)
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Queremos que você tenha a melhor experiência possível. Veja se o formato prático do nosso ateliê combina com os seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Coluna: Para Quem É */}
          <div className="md:col-span-7 bg-[#F4F7F4] border border-[#DEE6DF] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DEE6DF]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B4731]">
                  Para quem é:
                </h3>
                <span className="text-xs font-semibold text-[#355B3C] tracking-wide uppercase bg-[#E5ECE5] px-2.5 py-1 rounded">
                  Perfil Ideal
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#355B3C] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#2C382E] leading-relaxed">
                    Para quem quer aprender a criar roupas e acessórios sob medida.
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#355B3C] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#2C382E] leading-relaxed">
                    Para quem busca um hobby criativo, terapêutico e prático.
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#355B3C] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#2C382E] leading-relaxed">
                    Para quem quer fazer ajustes e customizações nas próprias roupas.
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#355B3C] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#2C382E] leading-relaxed font-medium">
                    Para quem quer começar do zero absoluto (sem nunca ter pegado numa agulha).
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DEE6DF] text-xs text-[#4F6955] italic">
              Metodologia acolhedora que respeita o ritmo e as preferências de cada aluna.
            </div>
          </div>

          {/* Coluna: Para Quem Não É */}
          <div className="md:col-span-5 bg-[#FAF2EF] border border-[#EEDBD5] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EEDBD5]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#7A3628]">
                  Para quem não é:
                </h3>
                <span className="text-xs font-semibold text-[#8C4334] tracking-wide uppercase bg-[#F4E3DF] px-2.5 py-1 rounded">
                  Não Recomendado
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#8C4334] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#4A322C] leading-relaxed">
                    Para quem procura apenas teoria chata ou aulas à distância.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-white/70 border border-[#EEDBD5] rounded-lg">
              <p className="text-xs text-[#6E4B43] leading-relaxed">
                Nossas aulas são 100% presenciais e práticas no ateliê em Porto Alegre. Acreditamos que a verdadeira costura se aprende sentindo o tecido, ouvindo o ritmo da máquina e praticando com as mãos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
