import React, { useState } from 'react';
import stefanTeacherPhoto from '../assets/images/stefan_teacher_photo.jpg';
import fallbackStefanPhoto from '../assets/images/professor_stefan_1791782481745.jpg';

export const TeacherSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(stefanTeacherPhoto);

  return (
    <section className="py-8 sm:py-10 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Título sem ziguezague embaixo */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Conheça o <span className="text-[#7843B3]">Prof. Stefan Kircher</span>
          </h2>
        </div>

        {/* Card do Professor */}
        <div className="bg-[#FAF8F5] border border-[#E5DECE] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 shadow-sm relative overflow-hidden">
          {/* Foto circular do Professor com anel em roxo */}
          <div className="shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-[#7843B3]">
              <img
                src={imgSrc}
                alt="Prof. Stefan Kircher no ateliê em Porto Alegre"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                onError={() => setImgSrc(fallbackStefanPhoto)}
              />
            </div>
          </div>

          {/* Texto Biográfico */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed mb-4 font-medium">
              Artista visual, designer de moda e professor com{' '}
              <strong className="font-bold text-[#111827]">mais de 10 anos de experiência</strong>,
              Stefan desenvolveu um método de costura do zero que leva o aluno do básico ao avançado,
              aprendendo na prática o processo de modelagem, corte, confecção, acabamentos e ajustes.
            </p>
            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-medium">
              Em seu{' '}
              <strong className="font-bold text-[#111827]">ateliê no Bairro Azenha</strong> ministra
              as aulas de forma 100% presencial com turmas de{' '}
              <strong className="font-bold text-[#111827]">no máximo 2 pessoas</strong>, atendendo
              as demandas de cada aluno de forma dinâmica e inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
