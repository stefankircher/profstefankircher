import React, { useState } from 'react';
import { Play, Sparkles, MapPin, Users, Scissors, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_atelier_sewing_1791773189747.jpg';
import studentImage from '../assets/images/student_learning_machine_1791773200847.jpg';
import garmentImage from '../assets/images/garment_finished_pieces_1791773211102.jpg';

interface HeroProps {
  onOpenVideo: () => void;
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onCtaClick }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'espaco' | 'pecas'>('video');

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#EBE5DC]">
      {/* Background delicate pastel tone washes */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#F5ECE3,transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Subheadline & Primary CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtle editorial kicker without pill box */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-3">
              <span>Ateliê Escola Presencial</span>
              <span aria-hidden="true">·</span>
              <span>Porto Alegre - RS</span>
            </div>

            {/* Headline Forte */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-bold text-[#2C2725] tracking-tight mb-5" style={{ textWrap: 'balance' }}>
              Aprenda a Costurar Suas Próprias Peças do Zero em Porto Alegre
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#5C534E] leading-relaxed mb-8 max-w-xl">
              Aulas 100% práticas em ateliê no Bairro Azenha. Turmas reduzidas para você aprender no seu próprio ritmo.
            </p>

            {/* Primary Action Button (CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#8C4334] hover:bg-[#77372A] active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap cursor-pointer group"
              >
                QUERO GARANTIR MINHA VAGA NA PRÓXIMA TURMA
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#4A423D] hover:text-[#2C2725] hover:bg-[#F2ECE4] border border-[#E0D8CE] rounded-md transition-all whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-[#8C4334]/10 text-[#8C4334] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Ver Tour no Ateliê (1 min)</span>
              </button>
            </div>

            {/* Editorial trust markers */}
            <div className="pt-6 border-t border-[#EBE5DC] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#6B615B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A7A60] shrink-0" />
                <span>Máquinas inclusas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A7A60] shrink-0" />
                <span>Bancada individual</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#5A7A60] shrink-0" />
                <span>Do zero absoluto</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame (Video Preview / Photo of High Impact) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#E0D8CE] bg-[#F7F2EB] shadow-xs">
              {/* Media selector tabs (functional segmented buttons) */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#F0EAE1] border-b border-[#E0D8CE]">
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setActiveMediaTab('video')}
                    className={`px-3 py-1 font-medium rounded transition-colors cursor-pointer ${
                      activeMediaTab === 'video'
                        ? 'bg-white text-[#2C2725] shadow-2xs font-semibold'
                        : 'text-[#6B615B] hover:text-[#2C2725]'
                    }`}
                  >
                    Vídeo (Tour 1 min)
                  </button>
                  <button
                    onClick={() => setActiveMediaTab('espaco')}
                    className={`px-3 py-1 font-medium rounded transition-colors cursor-pointer ${
                      activeMediaTab === 'espaco'
                        ? 'bg-white text-[#2C2725] shadow-2xs font-semibold'
                        : 'text-[#6B615B] hover:text-[#2C2725]'
                    }`}
                  >
                    O Ateliê
                  </button>
                  <button
                    onClick={() => setActiveMediaTab('pecas')}
                    className={`px-3 py-1 font-medium rounded transition-colors cursor-pointer ${
                      activeMediaTab === 'pecas'
                        ? 'bg-white text-[#2C2725] shadow-2xs font-semibold'
                        : 'text-[#6B615B] hover:text-[#2C2725]'
                    }`}
                  >
                    Peças Prontas
                  </button>
                </div>
                <div className="text-[11px] text-[#7A6F68] font-medium hidden sm:block">
                  Bairro Azenha · POA
                </div>
              </div>

              {/* Media frame container */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden group">
                {activeMediaTab === 'video' && (
                  <>
                    <img
                      src={studentImage}
                      alt="Aluna aprendendo a costurar na máquina no ateliê em Porto Alegre"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient scrim for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                    {/* Interactive Play Video Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <button
                        onClick={onOpenVideo}
                        aria-label="Assistir vídeo do ateliê de 1 minuto"
                        className="flex flex-col items-center gap-2 group/btn cursor-pointer"
                      >
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 text-[#8C4334] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover/btn:scale-110 active:scale-95">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                        <span className="text-xs font-semibold tracking-wide text-white drop-shadow-md bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                          Assistir Tour do Ateliê (1 min)
                        </span>
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 drop-shadow-sm pointer-events-none">
                      <span className="font-medium">Ambiente acolhedor & alunas na prática</span>
                      <span className="text-[11px] bg-black/40 px-2 py-0.5 rounded font-mono">01:00</span>
                    </div>
                  </>
                )}

                {activeMediaTab === 'espaco' && (
                  <div className="relative w-full h-full">
                    <img
                      src={heroImage}
                      alt="Espaço do ateliê equipado com máquinas de costura e mesas de corte"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded text-xs">
                      Ateliê amplo, luminoso e climatizado na Azenha
                    </div>
                  </div>
                )}

                {activeMediaTab === 'pecas' && (
                  <div className="relative w-full h-full">
                    <img
                      src={garmentImage}
                      alt="Peças de vestuário e acessórios feitas por alunas no curso"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded text-xs">
                      Vestidos, saias e tote bags com acabamento fino
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Full-width KPI / Value Strip Below Hero Split */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#EBE5DC] grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-3">
            <div className="font-serif text-2xl font-bold text-[#2C2725] mb-1">100% Prático</div>
            <p className="text-xs text-[#6B615B] leading-relaxed">Você opera a máquina desde a primeira aula do curso</p>
          </div>
          <div className="p-3">
            <div className="font-serif text-2xl font-bold text-[#2C2725] mb-1">Máx. 5 Alunas</div>
            <p className="text-xs text-[#6B615B] leading-relaxed">Atenção individualizada do professor no seu ritmo</p>
          </div>
          <div className="p-3">
            <div className="font-serif text-2xl font-bold text-[#2C2725] mb-1">Bairro Azenha</div>
            <p className="text-xs text-[#6B615B] leading-relaxed">Localização central com fácil acesso e estacionamento</p>
          </div>
          <div className="p-3">
            <div className="font-serif text-2xl font-bold text-[#2C2725] mb-1">Sem Máquina</div>
            <p className="text-xs text-[#6B615B] leading-relaxed">Todas as ferramentas e máquinas prontas na sua bancada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
