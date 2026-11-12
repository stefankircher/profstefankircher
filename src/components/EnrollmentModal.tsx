import React, { useState } from 'react';
import { X, Check, MessageCircle, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHEDULE_CLASSES, ScheduleClass } from '../data/courseData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClass?: ScheduleClass | null;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  selectedClass,
}) => {
  const [chosenClassId, setChosenClassId] = useState<string>(
    selectedClass ? selectedClass.id : SCHEDULE_CLASSES[0].id
  );
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('zero');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if selectedClass prop changes
  React.useEffect(() => {
    if (selectedClass) {
      setChosenClassId(selectedClass.id);
    }
  }, [selectedClass]);

  if (!isOpen) return null;

  const currentClass = SCHEDULE_CLASSES.find(c => c.id === chosenClassId) || SCHEDULE_CLASSES[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expText = experienceLevel === 'zero' ? 'Zero absoluto (nunca costurei)' : 'Já fiz pequenos pontos ou ajustes';
    const message = `Olá, Prof. Stefan! Meu nome é ${studentName || 'Interessado(a)'} e gostaria de marcar uma aula / garantir vaga na *${currentClass.name}* (${currentClass.schedule}) no Ateliê Azenha. Meu nível de costura: ${expText}.${notes ? ` Observações: ${notes}` : ''}`;
    
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551992613647?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] border border-[#E3DCD1] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE8DD] text-[#5C534E] hover:text-[#2C2725] flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] mb-1 block">
                Agendamento de Aula
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
                Marcar Aula no Ateliê na Azenha
              </h3>
              <p className="text-xs text-[#6B7280] mt-1">
                Preencha seus dados para conectar direto com o Prof. Stefan e reservar seu horário.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Select class */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                  Escolha o Dia e Horário Desejado:
                </label>
                <div className="space-y-2">
                  {SCHEDULE_CLASSES.map(item => (
                    <label
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                        chosenClassId === item.id
                          ? 'border-[#EA580C] bg-[#FFF7ED] text-[#111827] font-semibold'
                          : 'border-[#E3DCD1] bg-white text-[#5C534E] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="class_choice"
                          value={item.id}
                          checked={chosenClassId === item.id}
                          onChange={() => setChosenClassId(item.id)}
                          className="accent-[#EA580C]"
                        />
                        <div>
                          <div>{item.name}</div>
                          <div className="text-[11px] text-[#7A6F68] font-normal">{item.schedule}</div>
                        </div>
                      </div>
                      <span className="text-[11px]">{item.statusText}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Clara Martins"
                  value={studentName}
                  onChange={e => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-md text-xs sm:text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C]"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  Seu WhatsApp com DDD:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(51) 99999-9999"
                  value={studentPhone}
                  onChange={e => setStudentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-md text-xs sm:text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C]"
                />
              </div>

              {/* Experience level */}
              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1">
                  Você já costurou antes?
                </label>
                <select
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D0C5] rounded-md text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/20 focus:border-[#EA580C]"
                >
                  <option value="zero">Zero absoluto (nunca peguei numa agulha)</option>
                  <option value="basico">Já dei alguns pontos ou usei máquina antiga</option>
                  <option value="intermediario">Já faço pequenas barras e quero criar roupas</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] transition-all rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Confirmar e Conversar no WhatsApp</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-[#7A6F68]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Tire todas as dúvidas direto com o professor</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
              Solicitação Iniciada!
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto mb-6 leading-relaxed">
              Abrimos a conversa no WhatsApp para o Prof. Stefan responder sobre a sua aula na <strong className="text-[#111827]">{currentClass.name}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-md cursor-pointer"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
