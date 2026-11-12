import React, { useState } from 'react';
import { Check, MapPin, MessageCircle, Navigation, ShieldCheck, Coffee, Sparkles } from 'lucide-react';

interface PricingLocationProps {
  onOpenEnrollment: () => void;
  onOpenWhatsAppDirect: () => void;
}

export const PricingLocation: React.FC<PricingLocationProps> = ({
  onOpenEnrollment,
  onOpenWhatsAppDirect,
}) => {
  const [billingPlan, setBillingPlan] = useState<'mensal' | 'trimestral'>('mensal');

  const inclusions = [
    'Uso completo do espaço acolhedor e climatizado do ateliê',
    'Máquinas de costura retas modernas, overlock e galoneira',
    'Ferramentas de corte profissionais (tesouras de alfaiate, réguas e bases)',
    'Acompanhamento do professor do zero ao acabamento',
    'Retalhos e tecidos de treino inclusos para as primeiras práticas',
    'Bancada individual sem revezamento de máquinas',
    'Apostila digital de pontos, tabelas de medidas e acabamentos',
    'Cafézinho passado, chás especiais e ambiente descontraído',
  ];

  return (
    <section id="investimento" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Transparência Total
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Preço, Inclusões e Matrícula
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Sem pegadinhas, sem taxas surpresa de matrícula. Tudo o que você precisa para aprender a costurar suas peças está 100% incluso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
          {/* Left Column: Pricing Card */}
          <div className="lg:col-span-6 bg-[#FAF6F0] border-2 border-[#D8C7B5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Billing Toggle (Segmented control) */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E3D8CB] mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C4334] mb-1">
                    Plano de Aprendizado
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C2725]">
                    {billingPlan === 'mensal' ? 'Mensalidade Flexível' : 'Pacote Trimestral'}
                  </h3>
                </div>

                <div className="flex items-center p-1 bg-[#E8DDD0] rounded-lg">
                  <button
                    onClick={() => setBillingPlan('mensal')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      billingPlan === 'mensal'
                        ? 'bg-white text-[#2C2725] shadow-2xs font-semibold'
                        : 'text-[#6B615B] hover:text-[#2C2725]'
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setBillingPlan('trimestral')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      billingPlan === 'trimestral'
                        ? 'bg-white text-[#2C2725] shadow-2xs font-semibold'
                        : 'text-[#6B615B] hover:text-[#2C2725]'
                    }`}
                  >
                    Trimestral (-10%)
                  </button>
                </div>
              </div>

              {/* Price display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs uppercase font-semibold text-[#6B615B]">Valor do Investimento:</span>
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2C2725] tabular-nums">
                    {billingPlan === 'mensal' ? 'R$ 380' : 'R$ 340'}
                  </span>
                  <span className="text-sm font-medium text-[#6B615B]">
                    /mês
                  </span>
                </div>

                <div className="text-xs text-[#7A6F68] mt-2 flex items-center gap-2">
                  <span className="font-semibold text-[#5A7A60]">✓ ZERO taxa de matrícula</span>
                  <span>·</span>
                  <span>1 aula de 2h30 por semana</span>
                  {billingPlan === 'trimestral' && (
                    <>
                      <span>·</span>
                      <span className="text-[#8C4334] font-medium">Economia de R$ 120</span>
                    </>
                  )}
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-3 pt-6 border-t border-[#E3D8CB]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2C2725] mb-2">
                  O que está incluso no valor:
                </div>
                {inclusions.slice(0, 4).map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A423D]">
                    <div className="w-4 h-4 rounded-full bg-[#5A7A60] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA inside pricing */}
            <div className="mt-8 pt-6 border-t border-[#E3D8CB]">
              <button
                onClick={onOpenWhatsAppDirect}
                className="w-full py-4 px-6 text-sm sm:text-base font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] active:scale-[0.98] transition-all rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar com a Professora no WhatsApp e Matricular</span>
              </button>
              <p className="text-[11px] text-center text-[#7A6F68] mt-2">
                Resposta rápida direto pela professora do ateliê
              </p>
            </div>
          </div>

          {/* Right Column: Inclusions Details & Location Guarantee */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Full Inclusions Box */}
            <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-2xl p-6 sm:p-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8C4334] mb-1">
                Transparência dos Materiais
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2725] mb-4">
                O que está incluso nas aulas:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5C534E]">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5A7A60] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Garantia de Localização */}
            <div className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-2xl p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C4334] mb-1">
                  <MapPin className="w-4 h-4 text-[#8C4334]" />
                  <span>Garantia de Localização</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C2725] mb-2">
                  "Localizado no Bairro Azenha – Fácil acesso e estacionamento próximo."
                </h3>

                <p className="text-xs sm:text-sm text-[#5C534E] leading-relaxed mb-4">
                  O ateliê fica em uma rua tranquila e arborizada na Azenha, a poucos minutos do Shopping João Pessoa e com ligação rápida pela Av. Ipiranga, Av. Princesa Isabel e Av. Bento Gonçalves.
                </p>

                {/* Practical accessibility markers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B615B] mb-4 pt-3 border-t border-[#EBE5DC]">
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#8C4334]" />
                    <span>Linhas de ônibus municipais na porta</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5A7A60]" />
                    <span>Vagas de estacionamento na rua</span>
                  </div>
                </div>
              </div>

              {/* Map Action Button */}
              <a
                href="https://maps.google.com/?q=Bairro+Azenha+Porto+Alegre"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#4A423D] hover:text-[#2C2725] bg-[#F2ECE3] hover:bg-[#EAE2D7] rounded-md transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C4334]" />
                <span>Ver localização aproximada no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Big Banner CTA Final */}
        <div className="bg-[#8C4334] text-white rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F7D8D0] mb-2 block">
              Início Imediato na Próxima Turma
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4" style={{ textWrap: 'balance' }}>
              Dê o primeiro passo para vestir roupas feitas por você mesma
            </h3>
            <p className="text-sm sm:text-base text-[#F7E7E3] mb-8 leading-relaxed">
              Tire suas dúvidas diretamente com a professora, conheça o ateliê na Azenha e escolha o horário que melhor se adapta à sua rotina.
            </p>

            <button
              onClick={onOpenWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#8C4334] bg-white hover:bg-[#FDF9F6] active:scale-[0.98] transition-all rounded-md shadow-md cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Falar com a Professora no WhatsApp e Matricular</span>
            </button>

            <div className="mt-4 text-xs text-[#F2CAC1]">
              Atendimento atencioso · Sem compromisso · Vagas limitadas por turma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
