import React from 'react';
import { MapPin, Phone, Instagram, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24201E] text-[#D8D0C9] pt-14 pb-10 border-t border-[#3A3330]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl font-bold text-white tracking-tight mb-3 block">
              Ateliê Costura POA
            </span>
            <p className="text-xs text-[#A89F98] leading-relaxed max-w-sm mb-4">
              Aulas 100% práticas de costura do zero no Bairro Azenha, Porto Alegre. Ensinamos você a criar roupas e acessórios sob medida no seu próprio ritmo, com carinho e acompanhamento individual.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C2B7AE]">
              <MapPin className="w-3.5 h-3.5 text-[#E08A79] shrink-0" />
              <span>Bairro Azenha · Porto Alegre, RS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Navegação
            </div>
            <ul className="space-y-2 text-xs text-[#A89F98]">
              <li>
                <a href="#para-quem" className="hover:text-white transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  O Método Prático
                </a>
              </li>
              <li>
                <a href="#o-que-aprende" className="hover:text-white transition-colors">
                  O Que Você Vai Aprender
                </a>
              </li>
              <li>
                <a href="#alunas" className="hover:text-white transition-colors">
                  Galeria de Peças & Alunas
                </a>
              </li>
              <li>
                <a href="#turmas" className="hover:text-white transition-colors">
                  Tabela de Turmas & Horários
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-white transition-colors">
                  Valores & Inscrições
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and schedule */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Atendimento & Contato
            </div>
            <div className="space-y-2.5 text-xs text-[#A89F98] mb-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">WhatsApp:</span>
                <span>(51) 99874-3210</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">Horários:</span>
                <span>Terças, Quintas e Sábados</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">Local:</span>
                <span>Azenha (próximo à Av. Ipiranga)</span>
              </div>
            </div>

            <div className="p-3 bg-[#2D2825] rounded-lg border border-[#3E3733] text-[11px] text-[#A89F98]">
              Visitas ao ateliê com agendamento prévio pelo WhatsApp para não interromper as turmas em aula.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#3A3330] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A817A]">
          <div>
            © {new Date().getFullYear()} Ateliê Costura POA · Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Feito com dedicação e afeto artesanal em Porto Alegre</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
