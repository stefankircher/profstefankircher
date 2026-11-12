import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "../assets/images/carousel_1_7575.png";
import photo2 from "../assets/images/carousel_2_7577.png";
import photo3 from "../assets/images/carousel_3_7576.png";
import photo4 from "../assets/images/carousel_4_7570.jpg";
import photo5 from "../assets/images/carousel_5_7578.png";
import photo6 from "../assets/images/carousel_6_7579.png";

// Imagens na ordem específica solicitada pelo usuário
const CLASS_PHOTOS = [
  {
    id: 1,
    url: photo1,
    alt: "Aula de costura no Ateliê - Foto 1",
  },
  {
    id: 2,
    url: photo2,
    alt: "Aula de costura no Ateliê - Foto 2",
  },
  {
    id: 3,
    url: photo3,
    alt: "Aula de costura no Ateliê - Foto 3",
  },
  {
    id: 4,
    url: photo4,
    alt: "Aula de costura no Ateliê - Foto 4",
  },
  {
    id: 5,
    url: photo5,
    alt: "Aula de costura no Ateliê - Foto 5",
  },
  {
    id: 6,
    url: photo6,
    alt: "Aula de costura no Ateliê - Foto 6",
  },
];

// Array com clones nas pontas para looping contínuo perfeito:
// [Clone da foto 6, Foto 1, Foto 2, Foto 3, Foto 4, Foto 5, Foto 6, Clone da foto 1]
const EXTENDED_PHOTOS = [
  { ...CLASS_PHOTOS[CLASS_PHOTOS.length - 1], uniqueKey: "clone-last" },
  ...CLASS_PHOTOS.map((p) => ({ ...p, uniqueKey: `orig-${p.id}` })),
  { ...CLASS_PHOTOS[0], uniqueKey: "clone-first" },
];

export const WhatsAppCarousel: React.FC = () => {
  // Começa no índice 1 (Foto 1 real)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Passa automaticamente a cada 1,5 segundos de forma ágil, contínua e sem travar
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Gerenciamento do looping infinito instantâneo e invisível
  useEffect(() => {
    if (currentIndex >= EXTENDED_PHOTOS.length - 1) {
      // Chegou ao clone da Foto 1 no final (índice 7)
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(1); // Pula instantaneamente para a Foto 1 real
      }, 400); // 400ms = duração exata da transição CSS
      return () => clearTimeout(timer);
    } else if (currentIndex <= 0) {
      // Chegou ao clone da Foto 6 no início (índice 0)
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(CLASS_PHOTOS.length); // Pula instantaneamente para a Foto 6 real
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Reabilita a transição logo após o salto instantâneo
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => (prev >= EXTENDED_PHOTOS.length - 1 ? 2 : prev + 1));
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => (prev <= 0 ? CLASS_PHOTOS.length - 1 : prev - 1));
  };

  // Gestos touch refinados
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = (touchStartYRef.current || 0) - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 25) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const activeDotIndex = (() => {
    if (currentIndex <= 0) return CLASS_PHOTOS.length - 1;
    if (currentIndex >= EXTENDED_PHOTOS.length - 1) return 0;
    return currentIndex - 1;
  })();

  const handleDotClick = (idx: number) => {
    setWithTransition(true);
    setCurrentIndex(idx + 1);
  };

  return (
    <section className="py-8 sm:py-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Título com "sobre as aulas..." em roxo (#7843B3) */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-8">
          Um pouco mais <span className="text-[#7843B3]">sobre as aulas...</span>
        </h2>

        {/* Mockup do Celular com tela 15% maior (max-w ~218px no mobile, ~242px no desktop) */}
        <div
          className="relative max-w-[218px] sm:max-w-[242px] mx-auto mb-6 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Seta Esquerda */}
          <button
            onClick={prevSlide}
            aria-label="Foto anterior"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-[#111827] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={nextSlide}
            aria-label="Próxima foto"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-[#111827] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Carcaça do Celular com cantos arredondados */}
          <div className="rounded-[30px] bg-[#111827] p-2 sm:p-2.5 shadow-2xl border-[2.5px] border-[#1F2937] text-left">
            {/* Tela Interna 15% maior (altura h-[356px] a sm:h-[385px]) */}
            <div className="rounded-[22px] overflow-hidden bg-black border border-gray-800 relative h-[356px] sm:h-[385px] w-full flex flex-col justify-between shadow-inner">
              {/* Dynamic Island / Câmera no topo */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/90 backdrop-blur-md rounded-full border border-white/10 shadow-md pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111827] border border-gray-700" />
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Trilho de fotos animado continuamente e suave */}
              <div
                className="w-full h-full overflow-hidden relative cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex h-full will-change-transform"
                  style={{
                    transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                    transition: withTransition
                      ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                      : "none",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {EXTENDED_PHOTOS.map((photo, index) => (
                    <div
                      key={`${photo.uniqueKey}-${index}`}
                      className="w-full h-full shrink-0 relative bg-neutral-950 flex items-center justify-center overflow-hidden"
                      style={{ transform: "translateZ(0)" }}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center select-none pointer-events-none"
                        decoding="async"
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Barra inferior de navegação do celular */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-16 h-1 bg-white/40 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Indicador de Bolinhas (Dots) */}
        <div className="flex items-center justify-center gap-1.5">
          {CLASS_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Ir para foto ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx
                  ? "w-5 bg-[#7843B3]"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
