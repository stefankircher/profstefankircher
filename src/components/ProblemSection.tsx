import React from 'react';

interface ProblemSectionProps {
  onOpenEnroll: () => void;
}

/* =========================================================================
   ILUSTRAÇÕES VETORIAIS (UMA POR BULLET, ALTERNANDO ESQUERDA E DIREITA)
   ========================================================================= */

// 1. Ilustração do Card 1 (ESQUERDA): Mão com Agulha e Carinha Preocupada Centralizadas
const Card1Illustration: React.FC = () => {
  return (
    <div className="w-24 sm:w-32 h-20 sm:h-24 shrink-0 flex items-center justify-center">
      <svg
        viewBox="0 0 120 90"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Carinha com medo / preocupação */}
        <g transform="translate(10, 32)">
          {/* Rosto amarelo suave */}
          <circle cx="16" cy="16" r="14" fill="#FDE68A" stroke="#4A2366" strokeWidth="1.6" />
          {/* Olhos tristes/preocupados */}
          <circle cx="11" cy="14" r="1.8" fill="#4A2366" />
          <circle cx="21" cy="14" r="1.8" fill="#4A2366" />
          {/* Sobrancelhas caídas */}
          <path d="M8 10 Q11 8 13 11" stroke="#4A2366" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M24 10 Q21 8 19 11" stroke="#4A2366" strokeWidth="1.3" strokeLinecap="round" />
          {/* Boca trêmula / curvada para baixo */}
          <path d="M12 23 Q16 19 20 23" stroke="#4A2366" strokeWidth="1.6" strokeLinecap="round" />
          {/* Gota de suor / nervosismo */}
          <path d="M4 14 Q2 18 5 20 Q7 18 6 15 Z" fill="#93C5FD" stroke="#3B82F6" strokeWidth="0.8" />
        </g>

        {/* Mão segurando agulha e linha */}
        <g transform="translate(42, 14)">
          {/* Braço e punho */}
          <path
            d="M48 72 C40 62 33 50 28 42 C22 34 16 32 10 36 C5 40 7 46 13 52 C19 58 27 68 36 74 Z"
            fill="#FDBA74"
            stroke="#4A2366"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Polegar */}
          <path
            d="M18 36 C15 31 12 26 9 22 C6 18 2 19 1 22 C0 25 2 29 6 34 C10 38 14 42 18 43 Z"
            fill="#FED7AA"
            stroke="#4A2366"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Indicador */}
          <path
            d="M20 32 C23 27 27 20 26 16 C25 12 21 12 18 14 C14 17 13 24 15 29 Z"
            fill="#FED7AA"
            stroke="#4A2366"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Agulha prateada metálica */}
          <line
            x1="10"
            y1="36"
            x2="36"
            y2="6"
            stroke="#E2E8F0"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="36"
            x2="36"
            y2="6"
            stroke="#4A2366"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Olho da agulha */}
          <ellipse cx="34" cy="8" rx="1.5" ry="3" transform="rotate(-45 34 8)" fill="#4A2366" />

          {/* Linha de costura saindo da agulha */}
          <path
            d="M34 8 C42 4 52 8 55 18 C58 28 48 34 44 44 C40 54 46 64 52 68"
            fill="none"
            stroke="#6366F1"
            strokeWidth="1.6"
            strokeDasharray="3 1.5"
          />
        </g>
      </svg>
    </div>
  );
};

// 2. Ilustração do Card 2 (DIREITA): Ajuste de Bainha com Alfinete e Tesoura
const Card2Illustration: React.FC = () => {
  return (
    <div className="w-24 sm:w-32 h-20 sm:h-24 shrink-0 flex items-center justify-end overflow-hidden border-l-[1.5px] border-[#4A2366]/35 pl-2">
      <svg
        viewBox="0 0 120 95"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Perna esquerda do tecido */}
        <path
          d="M10 0 L15 75 C15 76 25 76 28 75 L38 0 Z"
          fill="#A5B4FC"
          stroke="#4A2366"
          strokeWidth="1.5"
        />
        <path d="M22 10 Q25 45 23 74" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />

        {/* Perna direita com bainha dobrada */}
        <g transform="translate(42, 0)">
          <rect
            x="0"
            y="0"
            width="55"
            height="76"
            fill="#93C5FD"
            stroke="#4A2366"
            strokeWidth="1.5"
          />
          <rect
            x="0"
            y="52"
            width="55"
            height="24"
            fill="#BFDBFE"
            stroke="#4A2366"
            strokeWidth="1.5"
          />

          {/* Pesponto tracejado do ajuste */}
          <line
            x1="4"
            y1="57"
            x2="51"
            y2="57"
            stroke="#4A2366"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />

          {/* Alfinete prendendo a barra */}
          <g transform="translate(30, 44)">
            <circle cx="2" cy="2" r="3" fill="#FBBF24" stroke="#4A2366" strokeWidth="1" />
            <line x1="2" y1="5" x2="2" y2="22" stroke="#64748B" strokeWidth="1.5" />
          </g>

          {/* Tesoura cortando a sobra */}
          <g transform="translate(32, 60)">
            <path d="M8 8 L18 2 L12 10 Z" fill="#CBD5E1" stroke="#4A2366" strokeWidth="1" />
            <path d="M8 12 L18 16 L12 10 Z" fill="#E2E8F0" stroke="#4A2366" strokeWidth="1" />
            <circle cx="12" cy="10" r="1.5" fill="#4A2366" />
            <circle cx="5" cy="5" r="4.5" fill="none" stroke="#EF4444" strokeWidth="2" />
            <circle cx="5" cy="15" r="4.5" fill="none" stroke="#EF4444" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// 3. Ilustração do Card 3 (ESQUERDA): Mulher Bordando no Bastidor com Flores
const Card3Illustration: React.FC = () => {
  return (
    <div className="w-24 sm:w-32 h-20 sm:h-24 shrink-0 flex items-center justify-center">
      <svg
        viewBox="0 0 115 95"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Espirais mágicas subindo */}
        <path
          d="M58 55 C65 40 50 32 62 18 C68 10 75 12 78 8"
          fill="none"
          stroke="#C084FC"
          strokeWidth="1.3"
          strokeDasharray="2 2"
        />

        {/* Florzinhas flutuando */}
        <g transform="translate(70, 8)">
          <circle cx="0" cy="0" r="3" fill="#F472B6" />
          <circle cx="-3" cy="-1" r="2" fill="#FBCFE8" />
          <circle cx="3" cy="-1" r="2" fill="#FBCFE8" />
          <circle cx="0" cy="-4" r="2" fill="#FBCFE8" />
          <circle cx="0" cy="2" r="2" fill="#FBCFE8" />
        </g>
        <g transform="translate(56, 24)">
          <circle cx="0" cy="0" r="2.5" fill="#FB923C" />
          <circle cx="-2.5" cy="0" r="1.8" fill="#FED7AA" />
          <circle cx="2.5" cy="0" r="1.8" fill="#FED7AA" />
          <circle cx="0" cy="-2.5" r="1.8" fill="#FED7AA" />
          <circle cx="0" cy="2.5" r="1.8" fill="#FED7AA" />
        </g>
        <path d="M48 36 L49 38 L51 39 L49 40 L48 42 L47 40 L45 39 L47 38 Z" fill="#FBBF24" />

        {/* Menina bordando */}
        <g transform="translate(6, 18)">
          {/* Cabelo */}
          <path
            d="M18 12 C14 8 26 2 34 8 C40 12 42 22 40 32 C38 42 34 50 30 52 C26 50 24 40 22 34 C20 28 16 20 18 12 Z"
            fill="#573022"
          />

          {/* Rosto sereno */}
          <ellipse cx="28" cy="18" rx="8" ry="9" fill="#FED7AA" stroke="#4A2366" strokeWidth="1.2" />
          <path d="M25 18 Q27 21 29 18" stroke="#4A2366" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M31 18 Q33 21 35 18" stroke="#4A2366" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M28 23 Q30 25 32 23" stroke="#4A2366" strokeWidth="1" strokeLinecap="round" />

          {/* Blusa lilás */}
          <path
            d="M18 30 C22 28 36 28 40 30 L45 54 C35 56 22 56 14 54 Z"
            fill="#DDD6FE"
            stroke="#4A2366"
            strokeWidth="1.2"
          />

          {/* Braços */}
          <path
            d="M18 36 C22 42 30 46 36 46"
            stroke="#FED7AA"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Bastidor de madeira */}
          <g transform="translate(28, 38)">
            <ellipse
              cx="18"
              cy="12"
              rx="18"
              ry="10"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            <ellipse cx="18" cy="12" rx="15" ry="7.5" fill="#FFFFFF" />
            <circle cx="18" cy="12" r="2.5" fill="#EC4899" />
            <path d="M18 12 L24 8" stroke="#64748B" strokeWidth="1" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// 4. Ilustração do Card 4 (DIREITA): Livro Pesado + Notebook com Vídeo e ZZZ
const Card4Illustration: React.FC = () => {
  return (
    <div className="w-24 sm:w-32 h-20 sm:h-24 shrink-0 flex items-center justify-center">
      <svg
        viewBox="0 0 115 95"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letras Z Z Z */}
        <text
          x="75"
          y="26"
          fill="#4A2366"
          fontWeight="bold"
          fontSize="11"
          fontFamily="sans-serif"
          opacity="0.85"
        >
          Z
        </text>
        <text
          x="83"
          y="20"
          fill="#4A2366"
          fontWeight="bold"
          fontSize="9"
          fontFamily="sans-serif"
          opacity="0.65"
        >
          z
        </text>
        <text
          x="89"
          y="15"
          fill="#4A2366"
          fontWeight="bold"
          fontSize="7"
          fontFamily="sans-serif"
          opacity="0.45"
        >
          z
        </text>

        {/* Livro pesado de teoria */}
        <g transform="translate(6, 18) rotate(-10)">
          <rect
            x="0"
            y="0"
            width="38"
            height="52"
            rx="3"
            fill="#78350F"
            stroke="#4A2366"
            strokeWidth="1.5"
          />
          <rect x="4" y="4" width="30" height="44" fill="#92400E" />
          <path d="M38 4 L44 8 L44 52 L38 48 Z" fill="#FEF3C7" stroke="#4A2366" strokeWidth="1" />
          <path d="M18 48 L18 56 L21 53 L24 56 L24 48 Z" fill="#EF4444" />
        </g>

        {/* Notebook com tela de vídeo */}
        <g transform="translate(28, 30)">
          <rect
            x="0"
            y="0"
            width="56"
            height="38"
            rx="3"
            fill="#1E293B"
            stroke="#4A2366"
            strokeWidth="1.5"
          />
          <rect x="3" y="3" width="50" height="32" fill="#334155" />
          <rect x="6" y="6" width="44" height="23" fill="#0F172A" />

          {/* Ícone de Play vermelho estilo YouTube */}
          <rect x="18" y="11" width="20" height="13" rx="2" fill="#EF4444" />
          <polygon points="26,14 32,17.5 26,21" fill="#FFFFFF" />

          {/* Barra de progresso */}
          <line x1="6" y1="31" x2="50" y2="31" stroke="#64748B" strokeWidth="2" />
          <line x1="6" y1="31" x2="22" y2="31" stroke="#EF4444" strokeWidth="2" />

          {/* Base e teclado */}
          <polygon
            points="-6,38 62,38 56,47 -2,47"
            fill="#94A3B8"
            stroke="#4A2366"
            strokeWidth="1.5"
          />
          <rect x="23" y="41" width="12" height="4" rx="0.5" fill="#64748B" />
        </g>
      </svg>
    </div>
  );
};

/* =========================================================================
   COMPONENTE PRINCIPAL PROBLEMSECTION (BLOCO "SE VOCÊ:")
   ========================================================================= */

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section className="pt-4 sm:pt-6 pb-8 sm:pb-10 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Título: SE VOCÊ: */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight uppercase mb-6 sm:mb-8 text-center">
          Se você:
        </h2>

        {/* =====================================================================
            LISTA VERTICAL DE 4 CARDS:
            Padrão alternado:
            1. Emoji na ESQUERDA | Texto alinhado
            2. Texto alinhado    | Emoji na DIREITA
            3. Emoji na ESQUERDA | Texto alinhado
            4. Texto alinhado    | Emoji na DIREITA
            Sem emojis na frente do texto, apenas 1 ilustração por bullet.
           ===================================================================== */}
        <div className="flex flex-col gap-4 sm:gap-4.5 mb-10">
          {/* ---------------- CARD 1: MEDO DE ERRAR (ESQUERDA) ---------------- */}
          <div className="relative bg-[#D6C0ED] border-2 border-[#4A2366] rounded-3xl p-3.5 sm:p-4 shadow-[0_5px_15px_rgba(74,35,102,0.16)] flex items-center justify-between gap-3 sm:gap-4 overflow-hidden min-h-[96px] sm:min-h-[106px] transition-transform hover:-translate-y-0.5">
            {/* Emoji na ESQUERDA centralizado */}
            <Card1Illustration />

            {/* Texto alinhado sem emoji na frente */}
            <div className="flex-1 text-left pr-2 sm:pr-4">
              <p className="text-sm sm:text-base font-bold text-[#111827] leading-relaxed">
                Sente medo de errar e não sabe bem por onde começar
              </p>
            </div>
          </div>

          {/* ---------------- CARD 2: ROUPAS COMPRIDAS (DIREITA) ---------------- */}
          <div className="relative bg-[#D6C0ED] border-2 border-[#4A2366] rounded-3xl p-3.5 sm:p-4 shadow-[0_5px_15px_rgba(74,35,102,0.16)] flex items-center justify-between gap-3 sm:gap-4 overflow-hidden min-h-[96px] sm:min-h-[106px] transition-transform hover:-translate-y-0.5">
            {/* Texto alinhado sem emoji na frente */}
            <div className="flex-1 text-left pl-2 sm:pl-4">
              <p className="text-sm sm:text-base font-bold text-[#111827] leading-relaxed">
                Comprou roupas lindas que ficaram compridas por falta de ajuste
              </p>
            </div>

            {/* Emoji na DIREITA */}
            <Card2Illustration />
          </div>

          {/* ---------------- CARD 3: HOBBY CRIATIVO (ESQUERDA) ---------------- */}
          <div className="relative bg-[#D6C0ED] border-2 border-[#4A2366] rounded-3xl p-3.5 sm:p-4 shadow-[0_5px_15px_rgba(74,35,102,0.16)] flex items-center justify-between gap-3 sm:gap-4 overflow-hidden min-h-[96px] sm:min-h-[106px] transition-transform hover:-translate-y-0.5">
            {/* Emoji na ESQUERDA centralizado */}
            <Card3Illustration />

            {/* Texto alinhado sem emoji na frente */}
            <div className="flex-1 text-left pr-2 sm:pr-4">
              <p className="text-sm sm:text-base font-bold text-[#111827] leading-relaxed">
                Busca um hobby criativo e terapêutico
              </p>
            </div>
          </div>

          {/* ---------------- CARD 4: TEORIA CHATA (DIREITA) ---------------- */}
          <div className="relative bg-[#D6C0ED] border-2 border-[#4A2366] rounded-3xl p-3.5 sm:p-4 shadow-[0_5px_15px_rgba(74,35,102,0.16)] flex items-center justify-between gap-3 sm:gap-4 overflow-hidden min-h-[96px] sm:min-h-[106px] transition-transform hover:-translate-y-0.5">
            {/* Texto alinhado sem emoji na frente */}
            <div className="flex-1 text-left pl-2 sm:pl-4">
              <p className="text-sm sm:text-base font-bold text-[#111827] leading-relaxed">
                Fica frustrada com vídeos da internet cheios de teoria chata
              </p>
            </div>

            {/* Emoji na DIREITA */}
            <Card4Illustration />
          </div>
        </div>

        {/* =====================================================================
            BLOCO RESPIRA (SEM ÍCONE EM CIMA)
           ===================================================================== */}
        <div className="max-w-xl mx-auto mb-8 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] mb-3 tracking-tight">
            Respira.
          </h3>

          <p className="text-xs sm:text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
            O problema nunca foi a sua dedicação ou falta de capacidade. Foi a falta de um
            direcionamento prático, presencial e organizado. É exatamente isso que as aulas no
            ateliê proporcionam{' '}
            <strong className="font-bold text-[#111827]">desde o 1º dia</strong>.
          </p>
        </div>

        {/* Botão verde CTA com link direto para o WhatsApp */}
        <div className="text-center">
          <a
            href="https://wa.me/5551992613647"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenEnroll}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm sm:text-base font-black text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-xl shadow-lg uppercase tracking-wider cursor-pointer border-b-4 border-[#14532D]"
          >
            Quero aprender na prática
          </a>
        </div>
      </div>
    </section>
  );
};
