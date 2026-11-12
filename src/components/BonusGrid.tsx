import React from "react";

// SVGs desenhados no exato mesmo estilo visual do bloco "Se você:"
// (Paleta com traço de contorno escuro roxo #4A2366, preenchimentos harmônicos em tons quentes, pastéis e detalhes de costura)

// Módulo 1: Máquina de costura manual e carretel com linha
const Modulo1Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 8)">
      {/* Base da máquina */}
      <rect x="2" y="46" width="76" height="10" rx="3" fill="#E2E8F0" stroke="#4A2366" strokeWidth="1.8" />
      {/* Coluna vertical */}
      <rect x="52" y="16" width="20" height="34" rx="2" fill="#F8FAFC" stroke="#4A2366" strokeWidth="1.8" />
      {/* Braço superior */}
      <rect x="18" y="12" width="54" height="15" rx="3" fill="#F8FAFC" stroke="#4A2366" strokeWidth="1.8" />
      {/* Cabeçote e agulha */}
      <rect x="18" y="24" width="8" height="12" fill="#CBD5E1" stroke="#4A2366" strokeWidth="1.4" />
      <line x1="22" y1="36" x2="22" y2="44" stroke="#4A2366" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="45" r="1.2" fill="#4A2366" />
      {/* Volante */}
      <ellipse cx="73" cy="22" rx="4" ry="9" fill="#FDBA74" stroke="#4A2366" strokeWidth="1.6" />
      {/* Carretel de linha em cima */}
      <rect x="58" y="4" width="8" height="8" rx="1.5" fill="#C084FC" stroke="#4A2366" strokeWidth="1.5" />
      <line x1="62" y1="2" x2="62" y2="4" stroke="#4A2366" strokeWidth="1.5" />
    </g>
  </svg>
);

// Módulo 2: Vestido e fita métrica/molde
const Modulo2Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(18, 6)">
      {/* Cabide */}
      <path d="M32 6 C32 2 28 2 28 4 C28 6 32 8 32 10 L16 18 L48 18 Z" fill="none" stroke="#4A2366" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Vestido */}
      <path d="M22 18 L20 28 L12 60 C12 60 32 64 52 60 L44 28 L42 18 Z" fill="#F472B6" stroke="#4A2366" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Cinto */}
      <rect x="19" y="27" width="26" height="5" rx="1" fill="#FDE047" stroke="#4A2366" strokeWidth="1.4" />
      {/* Pesponto da barra */}
      <path d="M15 56 C24 58 40 58 49 56" stroke="#4A2366" strokeWidth="1.4" strokeDasharray="3 1.5" />
    </g>
  </svg>
);

// Módulo 3: Camisa / Jaqueta com tesoura de alfaiate
const Modulo3Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 8)">
      {/* Molde/Camisa */}
      <path d="M26 12 L38 6 L50 12 L64 18 L58 30 L50 26 L50 56 L26 56 L26 26 L18 30 L12 18 Z" fill="#93C5FD" stroke="#4A2366" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Gola da camisa */}
      <polygon points="32,8 38,18 44,8" fill="#DBEAFE" stroke="#4A2366" strokeWidth="1.4" />
      {/* Botões */}
      <circle cx="38" cy="24" r="1.5" fill="#4A2366" />
      <circle cx="38" cy="34" r="1.5" fill="#4A2366" />
      <circle cx="38" cy="44" r="1.5" fill="#4A2366" />
      {/* Tesoura de corte ao lado */}
      <g transform="translate(48, 28) rotate(15)">
        <path d="M6 6 L20 0 L14 8 Z" fill="#CBD5E1" stroke="#4A2366" strokeWidth="1.3" />
        <path d="M6 10 L20 16 L14 8 Z" fill="#E2E8F0" stroke="#4A2366" strokeWidth="1.3" />
        <circle cx="14" cy="8" r="1.5" fill="#4A2366" />
        <circle cx="4" cy="4" r="3.5" fill="none" stroke="#EF4444" strokeWidth="1.6" />
        <circle cx="4" cy="12" r="3.5" fill="none" stroke="#EF4444" strokeWidth="1.6" />
      </g>
    </g>
  </svg>
);

// Módulo 4: Bolsa totebag / boné de tecido
const Modulo4Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(16, 6)">
      {/* Alça da bolsa */}
      <path d="M22 24 C22 10 42 10 42 24" fill="none" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M22 24 C22 10 42 10 42 24" fill="none" stroke="#4A2366" strokeWidth="1.4" strokeLinecap="round" />
      {/* Corpo da bolsa */}
      <rect x="12" y="22" width="40" height="42" rx="4" fill="#FBBF24" stroke="#4A2366" strokeWidth="1.8" />
      {/* Bolso frontal estruturado */}
      <rect x="18" y="34" width="28" height="22" rx="2" fill="#FED7AA" stroke="#4A2366" strokeWidth="1.5" />
      {/* Pesponto artesanal */}
      <line x1="20" y1="36" x2="44" y2="36" stroke="#4A2366" strokeWidth="1.3" strokeDasharray="2.5 1.5" />
    </g>
  </svg>
);

// Módulo 5: Agulha com linha costurando zíper / ajuste
const Modulo5Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(14, 8)">
      {/* Retalho com barra virada */}
      <rect x="8" y="14" width="56" height="46" rx="3" fill="#A7F3D0" stroke="#4A2366" strokeWidth="1.8" />
      <line x1="8" y1="46" x2="64" y2="46" stroke="#4A2366" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Agulha de costura atravessando */}
      <line x1="16" y1="56" x2="48" y2="12" stroke="#E2E8F0" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="16" y1="56" x2="48" y2="12" stroke="#4A2366" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="46" cy="14" rx="1.5" ry="2.5" transform="rotate(-40 46 14)" fill="#4A2366" />
      {/* Linha de costura roxa saindo da agulha */}
      <path d="M46 14 C54 8 62 14 60 26 C58 36 66 42 70 48" fill="none" stroke="#7843B3" strokeWidth="1.8" strokeDasharray="3 1.5" />
    </g>
  </svg>
);

// Módulo 6: Patchwork / Estrela de retalhos criativos
const Modulo6Illustration = () => (
  <svg viewBox="0 0 100 80" className="w-14 h-12 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(18, 8)">
      {/* Bloco quadrado de patchwork */}
      <rect x="4" y="4" width="56" height="56" rx="4" fill="#FDF4FF" stroke="#4A2366" strokeWidth="1.8" />
      {/* Triângulos de retalhos coloridos */}
      <polygon points="4,4 32,32 4,60" fill="#F472B6" stroke="#4A2366" strokeWidth="1.4" />
      <polygon points="4,4 60,4 32,32" fill="#67E8F9" stroke="#4A2366" strokeWidth="1.4" />
      <polygon points="60,4 60,60 32,32" fill="#FDE047" stroke="#4A2366" strokeWidth="1.4" />
      <polygon points="4,60 60,60 32,32" fill="#C084FC" stroke="#4A2366" strokeWidth="1.4" />
      {/* Pesponto central */}
      <circle cx="32" cy="32" r="3" fill="#FFFFFF" stroke="#4A2366" strokeWidth="1.4" />
    </g>
  </svg>
);

export const BonusGrid: React.FC = () => {
  const modules = [
    {
      id: "1",
      tag: "MÓDULO 1",
      title: "Domínio da máquina e confecção de acessórios básicos",
      desc: "Passagem de linha, manuseio da máquina e criação da primeira peça simples.",
      Illustration: Modulo1Illustration,
    },
    {
      id: "2",
      tag: "MÓDULO 2",
      title: "Modelagem e confecção 1",
      desc: "Aprendendo a construir moldes, cortar e confeccionar peças como saias, bermudas, shorts, calças e vestidos.",
      Illustration: Modulo2Illustration,
    },
    {
      id: "3",
      tag: "MÓDULO 3",
      title: "Modelagem e confecção 2",
      desc: "Aprendendo a construir moldes, cortar e confeccionar peças como camisas, camisetas, jaquetas, moletons e coletes.",
      Illustration: Modulo3Illustration,
    },
    {
      id: "4",
      tag: "MÓDULO 4",
      title: "Confecção de acessórios",
      desc: "Construção de acessórios como toucas, chapéus, bonés e bolsas.",
      Illustration: Modulo4Illustration,
    },
    {
      id: "5",
      tag: "MÓDULO 5",
      title: "Ajustes e reparos",
      desc: "Aprendendo a fazer ajustes de tamanho, barra de calça, troca e reparo de zíper, remendos, substituição de botões e troca de elástico.",
      Illustration: Modulo5Illustration,
    },
    {
      id: "6",
      tag: "MÓDULO 6",
      title: "Costura criativa",
      desc: "Confecção de acessórios para casa, patchwork, upcycling e projetos pessoais.",
      Illustration: Modulo6Illustration,
    },
  ];

  return (
    <section className="py-8 sm:py-10 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Title: Metodologia com subheadline */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-3">
            Metodologia
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed font-medium">
            Podemos focar em seu <strong className="font-bold text-[#111827]">objetivo específico ou seguir a minha metodologia, dividida em 6 módulos</strong>
          </p>
        </div>

        {/* 6 Cards com a exata estética dos bullets de "Se você:" (Fundo #D6C0ED, borda #4A2366, cantos arredondados, ilustrações desenhadas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {modules.map((item) => {
            const Illus = item.Illustration;
            return (
              <div
                key={item.id}
                className="bg-[#D6C0ED] border-2 border-[#4A2366] rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_5px_15px_rgba(74,35,102,0.16)] transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="drop-shadow-sm">
                      <Illus />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#F5EEFB] border border-[#4A2366]/40 text-[#4A2366] px-2.5 py-0.5 rounded-full shadow-2xs">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#111827] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111827]/85 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
