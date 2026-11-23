import type { ResponsiveImage } from '../types/content'

import ddsAvif640 from '../assets/images/consulting/galeria-dds-equipe-obra-640.avif'
import ddsAvif1024 from '../assets/images/consulting/galeria-dds-equipe-obra-1024.avif'
import ddsWebp640 from '../assets/images/consulting/galeria-dds-equipe-obra-640.webp'
import ddsWebp1024 from '../assets/images/consulting/galeria-dds-equipe-obra-1024.webp'
import inspecaoAvif640 from '../assets/images/consulting/galeria-inspecao-cinto-640.avif'
import inspecaoAvif960 from '../assets/images/consulting/galeria-inspecao-cinto-960.avif'
import inspecaoWebp640 from '../assets/images/consulting/galeria-inspecao-cinto-640.webp'
import inspecaoWebp960 from '../assets/images/consulting/galeria-inspecao-cinto-960.webp'
import detectorAvif640 from '../assets/images/consulting/galeria-teste-detector-gases-640.avif'
import detectorAvif868 from '../assets/images/consulting/galeria-teste-detector-gases-868.avif'
import detectorWebp640 from '../assets/images/consulting/galeria-teste-detector-gases-640.webp'
import detectorWebp868 from '../assets/images/consulting/galeria-teste-detector-gases-868.webp'

import fachadaVidroAvif640 from '../assets/images/services/galeria-fachada-vidro-cordas-640.avif'
import fachadaVidroAvif720 from '../assets/images/services/galeria-fachada-vidro-cordas-720.avif'
import fachadaVidroWebp640 from '../assets/images/services/galeria-fachada-vidro-cordas-640.webp'
import fachadaVidroWebp720 from '../assets/images/services/galeria-fachada-vidro-cordas-720.webp'
import reservatorioAvif640 from '../assets/images/services/galeria-reservatorio-cordas-640.avif'
import reservatorioAvif720 from '../assets/images/services/galeria-reservatorio-cordas-720.avif'
import reservatorioWebp640 from '../assets/images/services/galeria-reservatorio-cordas-640.webp'
import reservatorioWebp720 from '../assets/images/services/galeria-reservatorio-cordas-720.webp'
import telhaAvif640 from '../assets/images/services/galeria-troca-telha-640.avif'
import telhaAvif1024 from '../assets/images/services/galeria-troca-telha-1024.avif'
import telhaWebp640 from '../assets/images/services/galeria-troca-telha-640.webp'
import telhaWebp1024 from '../assets/images/services/galeria-troca-telha-1024.webp'

import posteAvif640 from '../assets/images/trainings/galeria-simulacao-resgate-poste-640.avif'
import posteAvif1024 from '../assets/images/trainings/galeria-simulacao-resgate-poste-1024.avif'
import posteWebp640 from '../assets/images/trainings/galeria-simulacao-resgate-poste-640.webp'
import posteWebp1024 from '../assets/images/trainings/galeria-simulacao-resgate-poste-1024.webp'
import escadaAvif640 from '../assets/images/trainings/galeria-subida-escada-talabarte-640.avif'
import escadaAvif960 from '../assets/images/trainings/galeria-subida-escada-talabarte-960.avif'
import escadaWebp640 from '../assets/images/trainings/galeria-subida-escada-talabarte-640.webp'
import escadaWebp960 from '../assets/images/trainings/galeria-subida-escada-talabarte-960.webp'
import cordasAvif640 from '../assets/images/trainings/galeria-instrucao-cordas-plataforma-640.avif'
import cordasAvif1024 from '../assets/images/trainings/galeria-instrucao-cordas-plataforma-1024.avif'
import cordasWebp640 from '../assets/images/trainings/galeria-instrucao-cordas-plataforma-640.webp'
import cordasWebp1024 from '../assets/images/trainings/galeria-instrucao-cordas-plataforma-1024.webp'
import treinandosAvif640 from '../assets/images/trainings/galeria-treinandos-cinto-640.avif'
import treinandosAvif960 from '../assets/images/trainings/galeria-treinandos-cinto-960.avif'
import treinandosWebp640 from '../assets/images/trainings/galeria-treinandos-cinto-640.webp'
import treinandosWebp960 from '../assets/images/trainings/galeria-treinandos-cinto-960.webp'
import vistaAvif640 from '../assets/images/trainings/galeria-treino-cordas-vista-de-cima-640.avif'
import vistaAvif864 from '../assets/images/trainings/galeria-treino-cordas-vista-de-cima-864.avif'
import vistaWebp640 from '../assets/images/trainings/galeria-treino-cordas-vista-de-cima-640.webp'
import vistaWebp864 from '../assets/images/trainings/galeria-treino-cordas-vista-de-cima-864.webp'
import mosquetoesAvif640 from '../assets/images/trainings/galeria-mosquetoes-640.avif'
import mosquetoesAvif1024 from '../assets/images/trainings/galeria-mosquetoes-1024.avif'
import mosquetoesWebp640 from '../assets/images/trainings/galeria-mosquetoes-640.webp'
import mosquetoesWebp1024 from '../assets/images/trainings/galeria-mosquetoes-1024.webp'

/*
  Fotos enviadas pelo Maurício para as galerias (novembro). Todas recortadas em 3:2,
  o formato da galeria, com o enquadramento escolhido foto a foto.
  Ficam só nas galerias, para não repetir as fotos dos cards e das outras páginas.
*/
function galleryPhoto(alt: string, avif: string, webp: string, src: string, width: number): ResponsiveImage {
  return {
    src,
    sources: [
      { type: 'image/avif', srcSet: avif },
      { type: 'image/webp', srcSet: webp },
    ],
    sizes: '100vw',
    width,
    height: Math.round((width * 2) / 3),
    alt,
  }
}

// Serviços: trabalhos realizados com acesso por cordas (além das fotos dos cards)
export const serviceGallery: ResponsiveImage[] = [
  galleryPhoto(
    'Profissional suspenso por cordas trabalhando junto à fachada de vidro interna de um prédio',
    `${fachadaVidroAvif640} 640w, ${fachadaVidroAvif720} 720w`,
    `${fachadaVidroWebp640} 640w, ${fachadaVidroWebp720} 720w`,
    fachadaVidroWebp720,
    720,
  ),
  galleryPhoto(
    'Profissional preso por cordas trabalhando na lateral de um reservatório de água alto, ao lado da escada de acesso',
    `${reservatorioAvif640} 640w, ${reservatorioAvif720} 720w`,
    `${reservatorioWebp640} 640w, ${reservatorioWebp720} 720w`,
    reservatorioWebp720,
    720,
  ),
  galleryPhoto(
    'Profissional de capacete e cinto de segurança, preso a uma linha de vida, trocando uma telha metálica no telhado',
    `${telhaAvif640} 640w, ${telhaAvif1024} 1024w`,
    `${telhaWebp640} 640w, ${telhaWebp1024} 1024w`,
    telhaWebp1024,
    1024,
  ),
]

// Consultoria: inspeção, avaliação e orientação no local de trabalho
export const consultingGallery: ResponsiveImage[] = [
  galleryPhoto(
    'Instrutor conversando com trabalhadores sentados em uma sala de aula montada em contêiner no canteiro de obras',
    `${ddsAvif640} 640w, ${ddsAvif1024} 1024w`,
    `${ddsWebp640} 640w, ${ddsWebp1024} 1024w`,
    ddsWebp1024,
    1024,
  ),
  galleryPhoto(
    'Instrutor conferindo o talabarte e os conectores do cinto de segurança de um trabalhador',
    `${inspecaoAvif640} 640w, ${inspecaoAvif960} 960w`,
    `${inspecaoWebp640} 640w, ${inspecaoWebp960} 960w`,
    inspecaoWebp960,
    960,
  ),
  galleryPhoto(
    'Profissional testando um detector portátil de gases com um cilindro de gás de calibração',
    `${detectorAvif640} 640w, ${detectorAvif868} 868w`,
    `${detectorWebp640} 640w, ${detectorWebp868} 868w`,
    detectorWebp868,
    868,
  ),
]

// Treinamentos: aulas práticas de trabalho em altura e resgate
export const trainingGallery: ResponsiveImage[] = [
  galleryPhoto(
    'Simulação de resgate em altura: trabalhador suspenso pelo cinto de segurança em um poste, ao lado da escada, com o socorrista segurando a corda',
    `${posteAvif640} 640w, ${posteAvif1024} 1024w`,
    `${posteWebp640} 640w, ${posteWebp1024} 1024w`,
    posteWebp1024,
    1024,
  ),
  galleryPhoto(
    'Instrutor subindo uma escada vertical preso pelo talabarte enquanto explica o procedimento para a turma',
    `${escadaAvif640} 640w, ${escadaAvif960} 960w`,
    `${escadaWebp640} 640w, ${escadaWebp960} 960w`,
    escadaWebp960,
    960,
  ),
  galleryPhoto(
    'Instrutor mostrando o manuseio de cordas para trabalhadores de cinto de segurança em uma plataforma metálica',
    `${cordasAvif640} 640w, ${cordasAvif1024} 1024w`,
    `${cordasWebp640} 640w, ${cordasWebp1024} 1024w`,
    cordasWebp1024,
    1024,
  ),
  galleryPhoto(
    'Trabalhadores de capacete e cinto de segurança ouvindo as orientações do instrutor',
    `${treinandosAvif640} 640w, ${treinandosAvif960} 960w`,
    `${treinandosWebp640} 640w, ${treinandosWebp960} 960w`,
    treinandosWebp960,
    960,
  ),
  galleryPhoto(
    'Vista de cima de um treino com cordas em plataforma metálica, com o instrutor e quatro trabalhadores equipados',
    `${vistaAvif640} 640w, ${vistaAvif864} 864w`,
    `${vistaWebp640} 640w, ${vistaWebp864} 864w`,
    vistaWebp864,
    864,
  ),
  galleryPhoto(
    'Instrutor ajoelhado mostrando diferentes tipos de mosquetões para os alunos',
    `${mosquetoesAvif640} 640w, ${mosquetoesAvif1024} 1024w`,
    `${mosquetoesWebp640} 640w, ${mosquetoesWebp1024} 1024w`,
    mosquetoesWebp1024,
    1024,
  ),
]
