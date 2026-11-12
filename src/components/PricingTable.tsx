import React, { useState } from 'react';
import { Check, Calendar, AlertTriangle, ArrowRight, MessageCircle } from 'lucide-react';
import { SCHEDULE_CLASSES, ScheduleClass } from '../data/courseData';

interface PricingTableProps {
  onSelectClass: (c: ScheduleClass) => void;
  onOpenWhatsApp: (plan: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  onSelectClass,
  onOpenWhatsApp,
}) => {
  const [selectedTurma, setSelectedTurma] = useState<string>(SCHEDULE_CLASSES[0].id);

  const currentTurmaObj = SCHEDULE_CLASSES.find(t => t.id === selectedTurma) || SCHEDULE_CLASSES[0];

  return (
    <section id="planos" className="bg-[#FAF8F5] py-14 sm:py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EBF5FF] text-[#1D63D8] text-xs font-bold tracking-wider uppercase mb-3 border border-[#DBEAFE]">
          ESCOLHA SEU PLANO
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight mb-4">
          Escolha Seu <span className="text-[#16A34A]">Plano</span>
        </h2>

        {/* Urgency Alert Banner matching screenshot */}
        <div className="max-w-xl mx-auto bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mb-10 shadow-2xs">
          <span>⚠️</span>
          <span>ÚLTIMAS VAGAS DISPONÍVEIS POR ESSE VALOR PROMOCIONAL</span>
        </div>

        {/* Tabela de Turmas e Horários Disponíveis - Foco em Escala e Escassez */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-7 mb-12 shadow-sm text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-gray-100 gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#111827]">
                Selecione Seu Horário na Tabela de Turmas
              </h3>
              <p className="text-xs text-[#6B7280]">
                Aulas semanais no Bairro Azenha · Máximo de 5 alunas por horário
              </p>
            </div>
            <div className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full self-start sm:self-auto">
              Presencial em Porto Alegre
            </div>
          </div>

          <div className="space-y-3">
            {SCHEDULE_CLASSES.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedTurma(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  selectedTurma === item.id
                    ? 'border-[#16A34A] bg-[#F0FDF4] shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="turma_choice"
                    checked={selectedTurma === item.id}
                    onChange={() => setSelectedTurma(item.id)}
                    className="accent-[#16A34A] w-4 h-4 cursor-pointer"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#111827] flex items-center gap-2">
                      <span>{item.name}</span>
                    </div>
                    <div className="text-xs text-[#4B5563] flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>{item.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.statusText}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectClass(item);
                    }}
                    className="text-xs font-bold px-3 py-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-md transition-colors cursor-pointer"
                  >
                    Reservar Vaga
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Comparison Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left items-stretch mb-8">
          {/* Card 1: PLANO BÁSICO */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-1">
                PLANO BÁSICO (MENSALIDADE)
              </div>
              <p className="text-xs text-[#6B7280] mb-4">
                Para começar a transformar suas roupas hoje mesmo
              </p>

              <div className="mb-6">
                <div className="text-xs line-through text-[#9CA3AF]">
                  De R$ 480,00
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#111827]">
                  R$ 380,00<span className="text-sm text-[#4B5563] font-medium">/mês</span>
                </div>
                <div className="text-xs text-[#16A34A] font-bold mt-1">
                  ✓ ZERO taxa de matrícula
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>1 aula semanal presencial de 2h30 no ateliê</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Bancada individual sem revezar máquina</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Uso livre de tesouras, réguas e ferro a vapor</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Acompanhamento passo a passo do professor</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenWhatsApp('Plano Mensal - R$ 380/mês')}
              className="w-full py-4 text-sm font-black text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-md tracking-wider uppercase shadow-md cursor-pointer text-center"
            >
              COMPRAR AGORA — R$ 380,00/MÊS
            </button>
          </div>

          {/* Card 2: PLANO COMPLETO (MAIS ESCOLHIDO) */}
          <div className="bg-white border-2 border-[#16A34A] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative">
            {/* Pill on Top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span>⭐ MAIS ESCOLHIDO</span>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#16A34A] mb-1">
                PLANO COMPLETO (TRIMESTRAL)
              </div>
              <p className="text-xs text-[#6B7280] mb-4">
                O ciclo completo para dominar corte, costura e acabamento fino
              </p>

              <div className="mb-4">
                <div className="text-xs line-through text-[#9CA3AF]">
                  De R$ 1.140,00
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#111827]">
                  3x R$ 340,00
                </div>
                <div className="text-xs text-[#4B5563] font-medium mt-0.5">
                  ou R$ 980,00 à vista no PIX (economia de R$ 160)
                </div>
              </div>

              {/* Yellow Sub-Button as shown in screenshot */}
              <div className="mb-6">
                <div className="w-full py-2.5 px-3 bg-[#EAB308] text-[#713F12] text-xs font-black rounded-lg text-center tracking-wider">
                  👉 ACESSO COMPLETO AO TRIMESTRE COM MOLDES 👈
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>12 aulas práticas completas (3 meses de evolução)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Confecção de até 4 peças prontas (bolsa, saia e vestidos)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Kit de moldes impressos graduados de presente</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Flexibilidade de reposição de aulas com aviso prévio</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Todos os maquinários e ferramentas inclusos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenWhatsApp('Plano Trimestral Completo - 3x R$ 340')}
              className="w-full py-4 text-sm font-black text-[#713F12] bg-[#EAB308] hover:bg-[#CA8A04] active:scale-[0.98] transition-all rounded-md tracking-wider uppercase shadow-md cursor-pointer text-center"
            >
              COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
