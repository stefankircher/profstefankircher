import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Check } from 'lucide-react';
import heroImg from '../assets/images/hero_atelier_sewing_1791773189747.jpg';
import studentImg from '../assets/images/student_learning_machine_1791773200847.jpg';
import garmentImg from '../assets/images/garment_finished_pieces_1791773211102.jpg';
import toolsImg from '../assets/images/atelier_details_tools_1791773220697.jpg';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollClick: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onEnrollClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [activeScene, setActiveScene] = useState<number>(0);

  const scenes = [
    {
      title: 'Ambiente do Ateliê na Azenha',
      desc: 'Bancadas individuais, iluminação natural ampla e café passado.',
      img: heroImg,
      duration: '0:20',
    },
    {
      title: 'Alunas Mexendo nas Máquinas',
      desc: 'Passo a passo com calma, guiando o tecido com segurança e sorrisos.',
      img: studentImg,
      duration: '0:40',
    },
    {
      title: 'Peças de Alto Acabamento',
      desc: 'Vestidos de linho, saias e tote bags prontas para vestir e usar.',
      img: garmentImg,
      duration: '1:00',
    },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setActiveScene(0);
            return 0;
          }
          const next = prev + 2;
          if (next > 66) setActiveScene(2);
          else if (next > 33) setActiveScene(1);
          else setActiveScene(0);
          return next;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentSceneData = scenes[activeScene];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#24201E] text-white rounded-2xl overflow-hidden max-w-3xl w-full border border-neutral-700 shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1C1816] border-b border-[#332C28]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E08A79]" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#E08A79]">
              Vídeo Tour do Ateliê (1 Minuto)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="w-7 h-7 rounded-full bg-[#2E2825] hover:bg-[#3D3531] text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-16/9 bg-black overflow-hidden group">
          <img
            src={currentSceneData.img}
            alt={currentSceneData.title}
            className="w-full h-full object-cover transition-all duration-700 scale-102"
          />

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Central Play/Pause toggle on screen */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-transform active:scale-95 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-0.5" />
              )}
            </button>
          </div>

          {/* Bottom Video Controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 to-transparent">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#E08A79] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#E08A79] transition-colors cursor-pointer"
                >
                  {isPlaying ? 'Pausar' : 'Reproduzir'}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center gap-1 hover:text-[#E08A79] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isMuted ? 'Mudo' : 'Som do Ateliê'}</span>
                </button>
                <span className="font-mono text-[#A89F98] text-[11px]">
                  0:{progress < 10 ? `0${Math.floor(progress * 0.6)}` : Math.floor(progress * 0.6)} / 1:00
                </span>
              </div>

              <div className="text-[11px] text-[#D8D0C9] hidden sm:block">
                Cena {activeScene + 1}: <strong className="text-white">{currentSceneData.title}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Scene navigation selector */}
        <div className="p-4 bg-[#1C1816] grid grid-cols-3 gap-2 border-t border-[#332C28]">
          {scenes.map((scene, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveScene(idx);
                setProgress(idx * 33 + 10);
              }}
              className={`p-2 rounded text-left transition-all cursor-pointer ${
                activeScene === idx
                  ? 'bg-[#2E2825] border border-[#E08A79]/50'
                  : 'hover:bg-[#25201D] border border-transparent'
              }`}
            >
              <div className="text-[10px] text-[#A89F98] mb-0.5">Cena {idx + 1} ({scene.duration})</div>
              <div className="text-xs font-semibold text-white truncate">{scene.title}</div>
            </button>
          ))}
        </div>

        {/* Bottom CTA bar inside video modal */}
        <div className="p-4 bg-[#24201E] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#332C28]">
          <div className="text-xs text-[#C2B7AE] text-center sm:text-left">
            Gostou do ambiente? As vagas para a próxima turma na Azenha já estão abertas.
          </div>
          <a
            href="https://wa.me/5551992613647"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] rounded-md transition-all whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
          >
            Quero Minha Vaga na Próxima Turma
          </a>
        </div>
      </div>
    </div>
  );
};
