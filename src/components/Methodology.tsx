import React from 'react';
import { Cpu, Users, HandMetal, CheckCircle } from 'lucide-react';
import atelierToolsImg from '../assets/images/atelier_details_tools_1791773220697.jpg';

export const Methodology: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Dinâmica Sem Complicação
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Como Funcionam as Aulas (O Método Prático)
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Eliminamos todo o medo e a complexidade desnecessária para você costurar com segurança e leveza logo no primeiro dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* 3 Pillars List */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Pilar 1: Ateliê Equipado */}
            <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl p-6 transition-all hover:border-[#D1C6B7]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFE8DD] text-[#8C4334] flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C2725] mb-2">
                    Ateliê Equipado
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
                    Maquinário completo (máquinas retas, galoneiras/overlock, tesouras e mesas de corte) à sua disposição.
                  </p>
                  <p className="text-xs text-[#7A6F68] mt-2">
                    Você não precisa investir em equipamentos caros antes de saber se gosta. Chegue apenas com a sua vontade de aprender.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 2: Turmas Reduzidas */}
            <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl p-6 transition-all hover:border-[#D1C6B7]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFE8DD] text-[#8C4334] flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                  02
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C2725] mb-2">
                    Turmas Reduzidas
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
                    Máximo de 4 a 5 alunas por horário para garantir atenção individualizada do professor.
                  </p>
                  <p className="text-xs text-[#7A6F68] mt-2">
                    Sem salas lotadas ou disputas de atenção. O professor senta ao seu lado, confere cada ponto e respeita o seu tempo de execução.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 3: Mão na Massa Desde o 1º Dia */}
            <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl p-6 transition-all hover:border-[#D1C6B7]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EFE8DD] text-[#8C4334] flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                  03
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C2725] mb-2">
                    Mão na Massa Desde o 1º Dia
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
                    Você não fica só olhando: aprende manuseando a máquina e criando projetos reais.
                  </p>
                  <p className="text-xs text-[#7A6F68] mt-2">
                    Desde a primeira aula você já costura suas primeiras linhas retas e curvas, sentindo o pedal e dominando a velocidade com calma.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual and Atelier Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden border border-[#E3DCD1] bg-[#FAF8F5] h-full flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={atelierToolsImg}
                  alt="Mesa de corte e ferramentas de costura fina do ateliê no Bairro Azenha"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#8C4334] uppercase tracking-wider mb-2">
                    Estrutura Completa
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#2C2725] mb-2">
                    Tudo pronto na sua bancada particular
                  </h4>
                  <p className="text-xs text-[#5C534E] leading-relaxed mb-4">
                    Ao chegar no ateliê, sua estação já estará configurada com máquina higienizada e revisada, tesouras profissionais alemãs, fita métrica, giz de alfaiate e alfinetes.
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#EBE5DC] text-xs text-[#6B615B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#5A7A60]" />
                    <span>Ambiente silencioso, arejado e acolhedor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#5A7A60]" />
                    <span>Café fresco e água aromatizada sempre disponíveis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
