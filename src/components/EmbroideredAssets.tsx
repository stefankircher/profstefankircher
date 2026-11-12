import React from 'react';

// Botão artesanal de madeira/couro com costura em X no centro (como no print)
export const StitchButtonIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-sm ${className}`}
    >
      <circle cx="20" cy="20" r="18" fill="url(#btn_wood_grad)" stroke="#B45309" strokeWidth="2" />
      <circle cx="20" cy="20" r="14" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="14" cy="14" r="2.5" fill="#451A03" />
      <circle cx="26" cy="14" r="2.5" fill="#451A03" />
      <circle cx="14" cy="26" r="2.5" fill="#451A03" />
      <circle cx="26" cy="26" r="2.5" fill="#451A03" />
      {/* Costura em X branca/bege */}
      <line x1="14" y1="14" x2="26" y2="26" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="14" x2="14" y2="26" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <radialGradient id="btn_wood_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 14) rotate(45) scale(26)">
          <stop stopColor="#F59E0B" />
          <stop offset="0.6" stopColor="#D97706" />
          <stop offset="1" stopColor="#92400E" />
        </radialGradient>
      </defs>
    </svg>
  );
};

// Divisor decorativo de ponto zig-zag (como na faixa roxa do print)
export const ZigZagStitch: React.FC<{ color?: string; className?: string }> = ({ color = '#FEF3C7', className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none py-1 ${className}`}>
      <svg className="w-full h-3" viewBox="0 0 600 12" fill="none" preserveAspectRatio="none">
        <path
          d="M0 6 L10 1 L20 11 L30 1 L40 11 L50 1 L60 11 L70 1 L80 11 L90 1 L100 11 L110 1 L120 11 L130 1 L140 11 L150 1 L160 11 L170 1 L180 11 L190 1 L200 11 L210 1 L220 11 L230 1 L240 11 L250 1 L260 11 L270 1 L280 11 L290 1 L300 11 L310 1 L320 11 L330 1 L340 11 L350 1 L360 11 L370 1 L380 11 L390 1 L400 11 L410 1 L420 11 L430 1 L440 11 L450 1 L460 11 L470 1 L480 11 L490 1 L500 11 L510 1 L520 11 L530 1 L540 11 L550 1 L560 11 L570 1 L580 11 L590 1 L600 11"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Patch Bordado: Tesoura de Alfaiataria (como no print)
export const EmbroideredScissorsPatch: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative inline-block p-2 rounded-xl bg-white/70 border-2 border-dashed border-[#C4B5A5] shadow-md ${className}`}>
      <svg width="110" height="70" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Lâminas pretas com bordado e brilho */}
        <path d="M15 45 C 50 48, 100 35, 145 25 C 105 50, 60 55, 15 45 Z" fill="#1F2937" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 3" />
        <path d="M15 45 C 50 42, 100 55, 145 65 C 105 40, 60 35, 15 45 Z" fill="#374151" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 3" />
        {/* Parafuso central dourado */}
        <circle cx="55" cy="45" r="5" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
        {/* Cabos arredondados */}
        <circle cx="125" cy="20" r="14" fill="none" stroke="#1F2937" strokeWidth="8" />
        <circle cx="125" cy="20" r="18" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 2" />
        <circle cx="125" cy="70" r="14" fill="none" stroke="#1F2937" strokeWidth="8" />
        <circle cx="125" cy="70" r="18" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 2" />
      </svg>
    </div>
  );
};

// Patch Bordado: Máquina de Costura Clássica (como no print)
export const EmbroideredMachinePatch: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative inline-block p-2 rounded-xl bg-white/70 border-2 border-dashed border-[#C4B5A5] shadow-md ${className}`}>
      <svg width="115" height="75" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Base da máquina */}
        <rect x="15" y="80" width="130" height="15" rx="3" fill="#111827" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 3" />
        {/* Corpo curvo vintage */}
        <path d="M25 80 L25 45 C25 25, 45 20, 75 20 L135 20 L135 80" fill="none" stroke="#111827" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 80 L25 45 C25 25, 45 20, 75 20 L135 20 L135 80" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Volante lateral */}
        <rect x="135" y="30" width="10" height="35" rx="3" fill="#4B5563" stroke="#F3F4F6" strokeWidth="1.5" />
        {/* Agulha e calcador */}
        <line x1="38" y1="55" x2="38" y2="80" stroke="#E5E7EB" strokeWidth="3" />
        {/* Pinos de carretel superiores */}
        <line x1="110" y1="12" x2="110" y2="20" stroke="#9CA3AF" strokeWidth="4" />
        <line x1="85" y1="12" x2="85" y2="20" stroke="#9CA3AF" strokeWidth="4" />
      </svg>
    </div>
  );
};

// Patch Bordado: Carretel de Linha com Agulha (como no print)
export const EmbroideredSpoolPatch: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative inline-block p-2 rounded-xl bg-white/70 border-2 border-dashed border-[#C4B5A5] shadow-md ${className}`}>
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Topo e base do carretel de madeira */}
        <rect x="25" y="15" width="50" height="12" rx="3" fill="#D97706" stroke="#78350F" strokeWidth="2" />
        <rect x="25" y="73" width="50" height="12" rx="3" fill="#D97706" stroke="#78350F" strokeWidth="2" />
        {/* Corpo de linha rosa/púrpura com voltas */}
        <rect x="30" y="27" width="40" height="46" rx="2" fill="#E879F9" stroke="#A21CAF" strokeWidth="2" />
        <line x1="32" y1="36" x2="68" y2="36" stroke="#FDF4FF" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="32" y1="46" x2="68" y2="46" stroke="#FDF4FF" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="32" y1="56" x2="68" y2="56" stroke="#FDF4FF" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="32" y1="66" x2="68" y2="66" stroke="#FDF4FF" strokeWidth="2" strokeDasharray="3 2" />
        {/* Agulha de aço prateada atravessada */}
        <line x1="20" y1="80" x2="80" y2="20" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="80" x2="80" y2="20" stroke="#4B5563" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="76" cy="24" r="1.5" fill="#1F2937" />
      </svg>
    </div>
  );
};

// Patch Bordado: Fita Métrica Amarela (como no print)
export const EmbroideredTapePatch: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative inline-block p-2 rounded-xl bg-white/70 border-2 border-dashed border-[#C4B5A5] shadow-md ${className}`}>
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
        {/* Caracol/rolo da fita */}
        <circle cx="60" cy="50" r="26" fill="#FBBF24" stroke="#92400E" strokeWidth="3" />
        <circle cx="60" cy="50" r="14" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        {/* Fita desenrolando à esquerda */}
        <path d="M15 65 L60 65 L60 76 L15 76 Z" fill="#FBBF24" stroke="#92400E" strokeWidth="2.5" />
        <line x1="24" y1="65" x2="24" y2="70" stroke="#78350F" strokeWidth="2" />
        <line x1="32" y1="65" x2="32" y2="72" stroke="#78350F" strokeWidth="2" />
        <line x1="40" y1="65" x2="40" y2="70" stroke="#78350F" strokeWidth="2" />
        <line x1="48" y1="65" x2="48" y2="72" stroke="#78350F" strokeWidth="2" />
        {/* Borda de costura branca */}
        <circle cx="60" cy="50" r="23" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    </div>
  );
};
