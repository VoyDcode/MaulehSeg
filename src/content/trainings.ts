import type { ContentItem } from '../types/content'
import { cardImage } from './card-image'

import nr35Avif640 from '../assets/images/trainings/nr35-treino-pratico-640.avif'
import nr35Avif900 from '../assets/images/trainings/nr35-treino-pratico-900.avif'
import nr35Webp640 from '../assets/images/trainings/nr35-treino-pratico-640.webp'
import nr35Webp900 from '../assets/images/trainings/nr35-treino-pratico-900.webp'

import nr33Avif640 from '../assets/images/trainings/nr33-aula-tripe-640.avif'
import nr33Avif1024 from '../assets/images/trainings/nr33-aula-tripe-1024.avif'
import nr33Webp640 from '../assets/images/trainings/nr33-aula-tripe-640.webp'
import nr33Webp1024 from '../assets/images/trainings/nr33-aula-tripe-1024.webp'

import nr23Avif640 from '../assets/images/trainings/nr23-turma-brigada-640.avif'
import nr23Avif900 from '../assets/images/trainings/nr23-turma-brigada-900.avif'
import nr23Webp640 from '../assets/images/trainings/nr23-turma-brigada-640.webp'
import nr23Webp900 from '../assets/images/trainings/nr23-turma-brigada-900.webp'

import resgateAvif640 from '../assets/images/trainings/resgate-tecnico-suspensao-640.avif'
import resgateAvif1024 from '../assets/images/trainings/resgate-tecnico-suspensao-1024.avif'
import resgateWebp640 from '../assets/images/trainings/resgate-tecnico-suspensao-640.webp'
import resgateWebp1024 from '../assets/images/trainings/resgate-tecnico-suspensao-1024.webp'

// Conforme o portfólio da empresa.
// PROVISÓRIO: confirmar os resumos com o Maurício. Os treinamentos sem foto
// própria mostram o código da norma no card.
export const trainings: ContentItem[] = [
  {
    slug: 'nr-05-cipa',
    title: 'NR-05 – CIPA',
    code: 'NR-05',
    summary: 'Formação dos membros da CIPA para identificar riscos, investigar acidentes e propor melhorias no trabalho.',
  },
  {
    slug: 'nr-06-epi',
    title: 'NR-06 – Equipamento de proteção individual',
    code: 'NR-06',
    summary: 'Escolha, uso correto, conservação e guarda dos equipamentos de proteção individual de cada atividade.',
  },
  {
    slug: 'nr-10-seguranca-em-eletricidade',
    title: 'NR-10 – Segurança em instalações elétricas',
    code: 'NR-10',
    summary: 'Prevenção de choques e acidentes em instalações e serviços com eletricidade, para quem atua na área.',
  },
  {
    slug: 'nr-11-movimentacao-de-materiais',
    title: 'NR-11 – Movimentação e manuseio de materiais',
    code: 'NR-11',
    summary: 'Operação segura de empilhadeiras e equipamentos de transporte, movimentação e armazenagem de materiais.',
  },
  {
    slug: 'nr-12-maquinas-e-equipamentos',
    title: 'NR-12 – Máquinas e equipamentos',
    code: 'NR-12',
    summary: 'Uso seguro de máquinas e equipamentos, com foco nas proteções, nos dispositivos de parada e nos riscos da operação.',
  },
  {
    slug: 'nr-17-ergonomia',
    title: 'NR-17 – Ergonomia',
    code: 'NR-17',
    summary: 'Postura, organização do trabalho e levantamento de cargas para prevenir lesões e afastamentos.',
  },
  {
    slug: 'nr-18-construcao-civil',
    title: 'NR-18 – Segurança na indústria da construção civil',
    code: 'NR-18',
    summary: 'Segurança nos canteiros de obra, do planejamento à execução das atividades da construção civil.',
  },
  {
    slug: 'nr-20-inflamaveis',
    title: 'NR-20 – Segurança com líquidos inflamáveis',
    code: 'NR-20',
    summary: 'Prevenção de incêndios e explosões no manuseio, armazenamento e transporte de inflamáveis e combustíveis.',
  },
  {
    slug: 'nr-23-brigada-de-incendio',
    title: 'NR-23 – Brigada de incêndio',
    code: 'NR-23',
    summary: 'Formação de brigadistas para prevenção e combate a princípios de incêndio, abandono de área e primeiros socorros.',
    image: cardImage(
      'Turma de brigadistas em sala de aula acompanhando a demonstração de dois instrutores',
      `${nr23Avif640} 640w, ${nr23Avif900} 900w`,
      `${nr23Webp640} 640w, ${nr23Webp900} 900w`,
      nr23Webp900,
      900,
    ),
  },
  {
    slug: 'nr-33-espacos-confinados',
    title: 'NR-33 – Espaços confinados',
    code: 'NR-33',
    summary: 'Entrada e trabalho seguro em espaços confinados, para trabalhadores autorizados, vigias e supervisores de entrada.',
    image: cardImage(
      'Instrutor com cinto de segurança e tripé de resgate dando aula para uma turma',
      `${nr33Avif640} 640w, ${nr33Avif1024} 1024w`,
      `${nr33Webp640} 640w, ${nr33Webp1024} 1024w`,
      nr33Webp1024,
      1024,
    ),
  },
  {
    slug: 'nr-35-trabalho-em-altura',
    title: 'NR-35 – Trabalho em altura',
    code: 'NR-35',
    summary: 'Planejamento, execução e uso dos equipamentos para trabalho acima de 2 metros de altura, com teoria e prática.',
    image: cardImage(
      'Alunos de capacete ajustando cintos e cordas durante um treino prático de trabalho em altura',
      `${nr35Avif640} 640w, ${nr35Avif900} 900w`,
      `${nr35Webp640} 640w, ${nr35Webp900} 900w`,
      nr35Webp900,
      900,
    ),
  },
  {
    slug: 'nbr-16710-resgate-tecnico',
    title: 'NBR 16710 – Resgate técnico em altura e espaço confinado',
    code: 'NBR 16710',
    summary: 'Técnicas de resgate em altura e em espaços confinados, conforme a NBR 16710, para equipes de emergência.',
    image: cardImage(
      'Aluno suspenso por cordas em treino de resgate técnico, acompanhado por instrutores',
      `${resgateAvif640} 640w, ${resgateAvif1024} 1024w`,
      `${resgateWebp640} 640w, ${resgateWebp1024} 1024w`,
      resgateWebp1024,
      1024,
    ),
  },
]
