import React, { useState } from 'react';
import { MessageCircle, Star, Volume2, Play, Pause, ZoomIn, CheckCheck } from 'lucide-react';
import { STUDENT_REVIEWS } from '../data/courseData';
import garmentsImg from '../assets/images/garment_finished_pieces_1791773211102.jpg';
import studentImg from '../assets/images/student_learning_machine_1791773200847.jpg';
import toolsImg from '../assets/images/atelier_details_tools_1791773220697.jpg';
import heroImg from '../assets/images/hero_atelier_sewing_1791773189747.jpg';

export const SocialProofGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vestidos' | 'bolsas' | 'acabamentos'>('all');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string; student: string } | null>(null);

  const galleryItems = [
    {
      id: '1',
      title: 'Vestido Envelope de Linho Puro',
      category: 'vestidos',
      student: 'Feito por Mariana D. (Turma Terça)',
      technique: 'Costura francesa embutida e amarração sob medida',
      img: garmentsImg,
    },
    {
      id: '2',
      title: 'Primeira Peça na Máquina: Aluna do Zero',
      category: 'acabamentos',
      student: 'Feito por Juliana R. (Turma Quinta)',
      technique: 'Controle de pedal suave e passagem de linha sem nós',
      img: studentImg,
    },
    {
      id: '3',
      title: 'Tote Bag Estruturada & Bolso Frontal',
      category: 'bolsas',
      student: 'Feito por Camila P. (Turma Sábado)',
      technique: 'Forro duplo, costura reforçada em X nas alças',
      img: toolsImg,
    },
    {
      id: '4',
      title: 'Bancada e Estação de Modelagem',
      category: 'acabamentos',
      student: 'Ateliê Bairro Azenha',
      technique: 'Corte preciso no fio do tecido com réguas de alfaiataria',
      img: heroImg,
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const toggleAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <section id="alunas" className="py-16 sm:py-20 lg:py-24 border-b border-[#EBE5DC] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#8C4334] mb-2">
            Prova Social & Galeria
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2725] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Peças Reais & Histórias de Quem Começou do Zero
          </h2>
          <p className="text-sm sm:text-base text-[#5C534E] leading-relaxed">
            Nada fala mais alto do que o orgulho de vestir aquilo que as suas próprias mãos produziram. Veja fotos de peças prontas e recados reais de alunas do ateliê.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#8C4334] text-white shadow-2xs'
                : 'bg-[#F2ECE3] text-[#5C534E] hover:bg-[#EAE2D7]'
            }`}
          >
            Todas as Peças
          </button>
          <button
            onClick={() => setActiveFilter('vestidos')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeFilter === 'vestidos'
                ? 'bg-[#8C4334] text-white shadow-2xs'
                : 'bg-[#F2ECE3] text-[#5C534E] hover:bg-[#EAE2D7]'
            }`}
          >
            Vestidos & Saias
          </button>
          <button
            onClick={() => setActiveFilter('bolsas')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeFilter === 'bolsas'
                ? 'bg-[#8C4334] text-white shadow-2xs'
                : 'bg-[#F2ECE3] text-[#5C534E] hover:bg-[#EAE2D7]'
            }`}
          >
            Bolsas & Acessórios
          </button>
          <button
            onClick={() => setActiveFilter('acabamentos')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeFilter === 'acabamentos'
                ? 'bg-[#8C4334] text-white shadow-2xs'
                : 'bg-[#F2ECE3] text-[#5C534E] hover:bg-[#EAE2D7]'
            }`}
          >
            Prática & Acabamentos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-[#FDFBF7] border border-[#E8E1D5] rounded-xl overflow-hidden group flex flex-col justify-between hover:shadow-xs transition-all"
            >
              <div 
                className="relative aspect-4/3 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPhoto({ src: item.img, caption: item.title, student: item.student })}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#2C2725] flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2C2725] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#8C4334] font-medium mb-2">
                    {item.student}
                  </p>
                  <p className="text-xs text-[#6B615B] leading-relaxed">
                    {item.technique}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos WhatsApp Section */}
        <div className="pt-10 border-t border-[#EBE5DC]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-[#2C2725] mb-2">
              Mensagens Reais Enviadas no WhatsApp do Ateliê
            </h3>
            <p className="text-xs sm:text-sm text-[#6B615B]">
              Depoimentos espontâneos de quem superou o medo da máquina e agora se veste com as próprias criações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_REVIEWS.map(review => (
              <div
                key={review.id}
                className="bg-[#F5F7F4] border border-[#DCE4DA] rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between relative"
              >
                {/* Header do WhatsApp */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D2DDD0]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#3B6645] text-white flex items-center justify-center font-bold text-xs">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#203324] flex items-center gap-1.5">
                          <span>{review.name}</span>
                          <span className="text-[10px] text-[#3B6645] bg-[#E1ECE0] px-1.5 py-0.2 rounded font-normal">Aluna</span>
                        </div>
                        <div className="text-[11px] text-[#556958]">
                          {review.neighborhood}
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#6E8071]">
                      {review.timeAgo}
                    </div>
                  </div>

                  {/* WhatsApp message bubble */}
                  <div className="bg-white border border-[#D5E1D3] rounded-xl p-4 mb-4 shadow-2xs text-xs sm:text-sm text-[#2C382E] leading-relaxed relative">
                    {/* Speech tail */}
                    <div className="absolute -top-2 left-6 w-3 h-3 bg-white border-t border-l border-[#D5E1D3] rotate-45" />

                    <p className="italic text-[#1E2B21] mb-2 font-medium">
                      "{review.highlight}"
                    </p>
                    <p className="text-[#3E4E42]">
                      {review.message}
                    </p>

                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-[#718674]">
                      <span>Lida</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#378B50]" />
                    </div>
                  </div>

                  {/* Audio simulation if available */}
                  {review.hasAudio && (
                    <div className="bg-[#E9F0E7] border border-[#D2DFCE] rounded-lg p-2.5 flex items-center gap-3 mb-3">
                      <button
                        onClick={() => toggleAudio(review.id)}
                        aria-label="Tocar áudio da aluna"
                        className="w-8 h-8 rounded-full bg-[#3B6645] text-white flex items-center justify-center shrink-0 hover:bg-[#2D5036] transition-colors cursor-pointer"
                      >
                        {playingAudioId === review.id ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : (
                          <Play className="w-3.5 h-3.5 ml-0.5" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-[11px] text-[#3B6645] font-medium mb-1">
                          <span>Mensagem de voz ({review.audioDuration})</span>
                          <span>{playingAudioId === review.id ? 'Ouvindo...' : 'Clique para ouvir'}</span>
                        </div>
                        {/* Audio waveform mock */}
                        <div className="h-2 bg-[#D1DEC9] rounded-full overflow-hidden flex items-center gap-0.5 px-1">
                          <div className={`h-full bg-[#3B6645] rounded-full transition-all duration-300 ${playingAudioId === review.id ? 'w-2/3 animate-pulse' : 'w-1/4'}`} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-[#556958] pt-2 border-t border-[#DCE4DA]">
                  Peça criada: <span className="font-semibold text-[#203324]">{review.projectMade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-xl overflow-hidden max-w-2xl w-full border border-white/20 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 sm:aspect-16/10">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base font-bold text-[#2C2725]">{selectedPhoto.caption}</h4>
                <p className="text-xs text-[#8C4334] font-medium">{selectedPhoto.student}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-3 py-1.5 text-xs font-semibold bg-[#EBE5DC] text-[#2C2725] rounded hover:bg-[#DFD7CC] cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
