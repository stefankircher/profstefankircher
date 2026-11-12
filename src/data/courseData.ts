export interface ScheduleClass {
  id: string;
  name: string;
  schedule: string;
  days: string;
  hours: string;
  status: "few_left" | "last_spot" | "open";
  statusText: string;
  statusBadgeColor: string;
  spotsLeft: number;
  totalSpots: number;
}

export interface StudentReview {
  id: string;
  name: string;
  neighborhood: string;
  timeAgo: string;
  avatar: string;
  projectMade: string;
  message: string;
  highlight: string;
  hasAudio?: boolean;
  audioDuration?: string;
}

export interface GarmentProject {
  id: string;
  title: string;
  category: "vestidos" | "saias" | "bolsas" | "detalhes";
  studentName: string;
  description: string;
  technique: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SCHEDULE_CLASSES: ScheduleClass[] = [
  {
    id: "terca-manha",
    name: "Turma Terça (Manhã)",
    schedule: "Terças-feiras, das 09:00 às 11:00",
    days: "Terças-feiras",
    hours: "09:00 às 11:00",
    status: "last_spot",
    statusText: "🔴 Apenas 1 vaga restante",
    statusBadgeColor: "bg-rose-50 text-rose-800 border-rose-200",
    spotsLeft: 1,
    totalSpots: 2,
  },
  {
    id: "quarta-tarde",
    name: "Turma Quarta (Tarde)",
    schedule: "Quartas-feiras, das 14:00 às 16:00",
    days: "Quartas-feiras",
    hours: "14:00 às 16:00",
    status: "few_left",
    statusText: "🟡 Vagas abertas",
    statusBadgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    spotsLeft: 2,
    totalSpots: 2,
  },
];

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: "1",
    name: "Mariana Duarte",
    neighborhood: "Menino Deus, Porto Alegre",
    timeAgo: "Ontem às 19:42",
    avatar: "MD",
    projectMade: "Vestido envelope de linho puro",
    message: "Professora, vim agradecer de coração! Usei meu vestido no almoço de domingo da família e ninguém acreditava que fui eu mesma quem costurou do zero. Sua paciência na hora de regular a máquina tirou todo o meu medo. O ateliê tem uma energia maravilhosa!",
    highlight: "Ninguém acreditava que fui eu quem costurou do zero!",
    hasAudio: true,
    audioDuration: "0:42",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Preciso levar minha própria máquina de costura?",
    answer: "Não precisa, o ateliê é 100% equipado com máquinas de costura, mesas de corte com réguas e tesouras. Você terá uma bancada exclusiva para você durante toda a aula.",
  },
  {
    question: "Nuca costurei na vida, consigo acompanhar?",
    answer: "Sim, a metodologia é do zero! Mais de 80% dos nossos alunos nunca haviam tocado numa máquina antes. Ensinamos desde a passagem correta da linha até a confecção completa de peças e acessórios.",
  },
  {
    question: "Como funcionam os dias e horários?",
    answer: "Os dias e horários são bem flexíveis de acordo com cada aluno... combinamos um horário que fique bom para todos!",
  },
  {
    question: "O que preciso levar?",
    answer: "Já fornecemos todos os materiais necessários como mesa de corte, máquinas de costura, linhas, réguas, tesouras.. o aluno precisa trazer apenas o algodão crú( tecido barato para treino) ou qualquer outro tecido que queira trabalhar. Damos uma lista com indicação das melhores lojas de tecidos em Porto Alegre para nossos alunos.",
  },
  {
    question: "Onde fica localizado o ateliê?",
    answer: "Estamos situados no coração do Bairro Azenha em Porto Alegre, com fácil acesso de ônibus, ciclovias e proximidade da Av. Azenha.",
  },
  {
    question: "Tem estacionamento no local?",
    answer: "Sim, o espaço possui um estacionamento próprio! Você não precisa se preocupar em achar local pra estacionar ou ter que pagar por uma vaga.",
  },
];
