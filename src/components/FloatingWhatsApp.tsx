import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpen = () => {
    const text = encodeURIComponent('Olá, Prof. Stefan! Gostaria de mais informações sobre as aulas de corte e costura no Ateliê.');
    window.open(`https://wa.me/5551992613647?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Discreet helper bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#2C2725] text-xs font-medium py-2 px-3 rounded-lg shadow-lg border border-[#E3DCD1] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Dúvidas sobre turmas? Fale direto no WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#8C827A] hover:text-[#2C2725] ml-1 cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating circle button */}
      <a
        href="https://wa.me/5551992613647"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o professor no WhatsApp"
        className="w-13 h-13 rounded-full bg-[#3B6645] hover:bg-[#32573B] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-106 active:scale-95 cursor-pointer relative group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="sr-only">WhatsApp do Ateliê</span>
      </a>
    </div>
  );
};
