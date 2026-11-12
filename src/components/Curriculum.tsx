import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Domínio da Máquina e Ferramentas',
      subtitle: 'Passagem de linha, regulagem e primeiros pontos.',
      description: 'Aprenda a ligar, encher bobina, regular a tensão do ponto sem quebrar linhas e conduzir o tecido com segurança nas costuras retas e curvas.',
      badge: 'Fundamentos',
    },
    {
      num: '02',
      title: 'Corte e Modelagem Básica',
      subtitle: 'Entendendo tecidos, moldes e marcações.',
      description: 'Como posicionar o fio do tecido, transferir moldes com precisão, usar a tesoura de corte corretamente e deixar margens de costura uniformes.',
      badge: 'Preparação',
    },
    {
      num: '03',
      title: 'Confecção da 1ª Peça',
      subtitle: 'Montagem passo a passo com acabamento profissional.',
      description: 'Você une as partes cortadas, alinhando costuras laterais, pence e piques. Cada etapa é conferida antes de passar a ferro.',
      badge: 'Criação Real',
    },
    {
      num: '04',
      title: 'Acabamentos e Detalhes',
      subtitle: 'Costura embutida, zíperes, barras e barras invisíveis.',
      description: 'O segredo da peça de ateliê: costura francesa (sem overlock aparente), colocação de zíper invisível sem ondulação e barra com caimento perfeito.',
      badge: 'Alto Acabamento',
    },
  ];

  return (
    <section id="o-que-aprende" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Módulos / Projeto
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            O que Você Vai Aprender
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Uma jornada estruturada passo a passo para você sair da insegurança e criar peças que terá orgulho de usar.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-[#FBF9F6] border border-[#E5DFD4] rounded-xl p-6 flex flex-col justify-between transition-all hover:border-[#8C4334]/40 hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#8C4334]">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-medium text-[#6B615B] uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2C2725] mb-2 group-hover:text-[#8C4334] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#8C4334] mb-3 leading-snug">
                  {step.subtitle}
                </p>

                <p className="text-xs text-[#5C534E] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBE5DC] flex items-center justify-between text-[11px] text-[#7A6F68]">
                <span>Etapa {idx + 1} de 4</span>
                <span className="text-[#8C4334] font-medium">100% Prática</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Outcome Banner */}
        <div className="mt-10 p-6 rounded-xl bg-[#F4EFEB] border border-[#E0D8CE] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#8C4334]/10 text-[#8C4334] flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#2C2725] mb-1">
                Você sai do curso com peças completas vestindo no seu corpo
              </h4>
              <p className="text-xs sm:text-sm text-[#5C534E]">
                Diferente de cursos tradicionais teóricos, aqui o objetivo é você construir uma tote bag estruturada, uma saia sob medida e seu primeiro vestido com acabamento limpo.
              </p>
            </div>
          </div>
          <a
            href="#turmas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4334] hover:text-[#77372A] whitespace-nowrap shrink-0 group"
          >
            <span>Ver horários das turmas</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
