import React from 'react';
import { Clock, Calendar, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { SCHEDULE_CLASSES, ScheduleClass } from '../data/courseData';

interface ScheduleTableProps {
  onSelectClass: (c: ScheduleClass) => void;
}

export const ScheduleTable: React.FC<ScheduleTableProps> = ({ onSelectClass }) => {
  return (
    <section id="turmas" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Foco em Escala e Escassez
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Tabela de Turmas e Horários Disponíveis
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Para assegurar que cada aluna tenha sua própria máquina e acompanhamento próximo da professora, limitamos cada turma a no máximo 5 vagas.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl overflow-hidden shadow-2xs mb-8">
          <div className="grid grid-cols-12 bg-[#EFE9DF] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5C534E] border-b border-[#E3DCD1]">
            <div className="col-span-4">Turma</div>
            <div className="col-span-4">Dia e Horário</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-right">Ação</div>
          </div>

          <div className="divide-y divide-[#EBE5DC]">
            {SCHEDULE_CLASSES.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 px-6 py-5 items-center hover:bg-[#F2ECE3]/50 transition-colors"
              >
                <div className="col-span-4">
                  <div className="font-serif text-base font-bold text-[#2C2725]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#7A6F68] mt-0.5">
                    Máximo de {item.totalSpots} alunas por bancada
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="text-sm font-medium text-[#2C2725] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8C4334] shrink-0" />
                    <span>{item.schedule}</span>
                  </div>
                  <div className="text-xs text-[#7A6F68] mt-0.5">
                    Encontros semanais de 2h30 cada
                  </div>
                </div>

                <div className="col-span-2 text-center">
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {item.statusText}
                  </span>
                </div>

                <div className="col-span-2 text-right">
                  <button
                    onClick={() => onSelectClass(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] active:scale-[0.98] rounded-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Garantir Vaga</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4 mb-8">
          {SCHEDULE_CLASSES.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl p-5 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-base font-bold text-[#2C2725]">
                    {item.name}
                  </h3>
                  <span className="text-xs font-bold">
                    {item.statusText}
                  </span>
                </div>

                <div className="text-xs text-[#4A423D] flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#8C4334] shrink-0" />
                  <span className="font-medium">{item.schedule}</span>
                </div>

                <p className="text-xs text-[#7A6F68] mb-4">
                  Aulas 100% práticas, bancada individual no Bairro Azenha.
                </p>
              </div>

              <button
                onClick={() => onSelectClass(item)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] active:scale-[0.98] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Garantir Minha Vaga Nesta Turma</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Escassez & Regras de Matrícula */}
        <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-xl p-5 sm:p-6 text-xs sm:text-sm text-[#5C534E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8C4334]/10 text-[#8C4334] flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-[#2C2725]">Atenção à disponibilidade: </span>
              Como as turmas têm no máximo 5 alunas, as vagas encerram assim que o limite de bancadas é atingido.
            </div>
          </div>
          <div className="text-xs text-[#8C4334] font-semibold whitespace-nowrap">
            Garantia de bancada individual
          </div>
        </div>
      </div>
    </section>
  );
};
