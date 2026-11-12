import React from 'react';

interface HeaderProps {
  onOpenEnrollment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE5DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C2725] hover:text-[#8C4334] transition-colors whitespace-nowrap shrink-0"
        >
          Ateliê Costura POA
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C534E]">
          <a href="#para-quem" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            Para Quem É
          </a>
          <a href="#como-funciona" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            O Método
          </a>
          <a href="#o-que-aprende" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            Conteúdo
          </a>
          <a href="#alunas" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            Galeria & Prova
          </a>
          <a href="#turmas" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            Horários
          </a>
          <a href="#investimento" className="hover:text-[#2C2725] transition-colors whitespace-nowrap shrink-0">
            Valores & FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEnrollment}
            className="px-4.5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#8C4334] hover:bg-[#77372A] active:scale-[0.98] transition-all rounded-md shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            Garantir Minha Vaga
          </button>
        </div>
      </div>
    </header>
  );
};
