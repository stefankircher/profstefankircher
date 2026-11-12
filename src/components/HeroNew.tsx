import React from 'react';
import { Check } from 'lucide-react';
import heroImg from '../assets/images/hero_img_7578.png';
import studentImg from '../assets/images/student_learning_machine_1791773200847.jpg';

interface HeroNewProps {
  onOpenVideo?: () => void;
  onOpenEnroll: () => void;
}

export const HeroNew: React.FC<HeroNewProps> = ({ onOpenEnroll }) => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline Grande e Mais Chamativa (+20%), em Preto e Roxo */}
        <h1 className="text-5xl sm:text-7xl lg:text-[76px] font-black text-[#111827] tracking-tight leading-[1.03] mb-5 drop-shadow-xs">
          Aprenda a Costurar do Zero e <span className="text-[#7843B3]">Crie as Suas Próprias Roupas</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl font-medium text-[#4B5563] max-w-2xl mx-auto leading-relaxed mb-8">
          Aulas <strong className="font-bold text-[#111827]">100% presenciais e práticas</strong> em ateliê equipado no bairro Azenha (Porto Alegre)
        </p>

        {/* Imagem do Ateliê */}
        <div className="max-w-[270px] sm:max-w-[310px] mx-auto mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 outline outline-1 outline-gray-200">
            <img
              src={heroImg}
              alt="Aulas presenciais de costura no ateliê"
              className="w-full h-auto object-cover block"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = studentImg;
              }}
            />
          </div>
        </div>

        {/* Bullet points abaixo do vídeo com fundo roxo 15% mais claro */}
        <div className="max-w-xl mx-auto mb-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3.5 bg-[#E6D5FA] border border-[#D5B8F7] rounded-xl shadow-xs text-[#331C44]">
              <div className="w-6 h-6 rounded-md bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-bold tracking-wide">Do básico ao avançado</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-[#E6D5FA] border border-[#D5B8F7] rounded-xl shadow-xs text-[#331C44]">
              <div className="w-6 h-6 rounded-md bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-bold tracking-wide">Zero teoria chata</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-[#E6D5FA] border border-[#D5B8F7] rounded-xl shadow-xs text-[#331C44]">
              <div className="w-6 h-6 rounded-md bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-bold tracking-wide">Modelagem, corte e confecção</span>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-[#E6D5FA] border border-[#D5B8F7] rounded-xl shadow-xs text-[#331C44]">
              <div className="w-6 h-6 rounded-md bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-bold tracking-wide">Aulas particulares e em duplas</span>
            </div>
          </div>
        </div>

        {/* Botão CTA Verde com link direto para o WhatsApp */}
        <div className="text-center">
          <a
            href="https://wa.me/5551992613647"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenEnroll}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm sm:text-base font-black text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-xl shadow-lg uppercase tracking-wider cursor-pointer border-b-4 border-[#14532D]"
          >
            Quero garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
};
