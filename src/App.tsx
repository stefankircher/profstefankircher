import React, { useState } from 'react';
import { HeroNew } from './components/HeroNew';
import { ProblemSection } from './components/ProblemSection';
import { TeacherSection } from './components/TeacherSection';
import { BonusGrid } from './components/BonusGrid';
import { WhatsAppCarousel } from './components/WhatsAppCarousel';
import { ClassOfferSection } from './components/ClassOfferSection';
import { FAQSection } from './components/FAQSection';
import { FooterNew } from './components/FooterNew';
import { EnrollmentModal } from './components/EnrollmentModal';
import { VideoModal } from './components/VideoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScheduleClass } from './data/courseData';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ScheduleClass | null>(null);

  const handleOpenEnroll = () => {
    window.open('https://wa.me/5551992613647', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen text-[#1F1924] font-sans antialiased overflow-x-hidden">
      <main>
        {/* 1. Hero Section */}
        <HeroNew
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenEnroll={handleOpenEnroll}
        />

        {/* 2. Se você: (Dores com emojis de costura e direcionamento) */}
        <ProblemSection onOpenEnroll={handleOpenEnroll} />

        {/* 3. Conheça seu Professor (Posicionado logo após Se você:) */}
        <TeacherSection />

        {/* 4. Metodologia (6 Cards em marrom claro com subheadline) */}
        <BonusGrid />

        {/* 5. Carrossel de Depoimentos do WhatsApp no Celular */}
        <WhatsAppCarousel />

        {/* 6. Tabela de Turmas, Oferta e Valores (Inserido antes do FAQ) */}
        <ClassOfferSection onOpenEnroll={handleOpenEnroll} />

        {/* 7. Perguntas Frequentes (FAQ Acordeão) + Botão CTA Verde */}
        <FAQSection onScrollToPlans={handleOpenEnroll} />
      </main>

      {/* 8. Rodapé */}
      <FooterNew />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp onOpenModal={handleOpenEnroll} />

      {/* Modal de Matrícula / Reserva */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        selectedClass={selectedClass}
      />

      {/* Modal de Vídeo Tour do Ateliê */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onEnrollClick={handleOpenEnroll}
      />
    </div>
  );
}
