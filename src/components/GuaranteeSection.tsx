import React from 'react';
import { Lock, Shield, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onScrollToPlans: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="bg-[#114B2C] text-white py-14 sm:py-20 border-b border-[#0D3820]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Icons header matching screenshot */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Lock className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Shield className="w-5 h-5" />
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[#16A34A] text-white text-xs font-black uppercase tracking-wider">
            ✓ 7 DIAS
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
          VOCÊ ESTÁ PROTEGIDA PELA <span className="text-[#86EFAC]">GARANTIA!</span>
        </h2>

        {/* Explanation */}
        <p className="text-xs sm:text-sm text-[#D1FAE5] leading-relaxed mb-8 max-w-lg mx-auto">
          Se na sua primeira aula você não gostar do método, das máquinas ou do ambiente do ateliê por qualquer motivo, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. Zero risco para você dar o primeiro passo hoje.
        </p>

        {/* Button matching screenshot */}
        <div>
          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-black text-[#FACC15] bg-[#111827] hover:bg-black active:scale-[0.98] transition-all rounded-md tracking-wider uppercase shadow-xl cursor-pointer"
          >
            REALIZAR O PAGAMENTO E RECEBER CONFIRMAÇÃO DE VAGA
          </button>
        </div>
      </div>
    </section>
  );
};
