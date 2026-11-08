import { paths } from '../paths'
import type { AboutContent } from '../types/content'
import { trainings } from './trainings'

import donoAvif640 from '../assets/images/about/dono-sorrindo-640.avif'
import donoAvif1024 from '../assets/images/about/dono-sorrindo-1024.avif'
import donoAvif1600 from '../assets/images/about/dono-sorrindo-1600.avif'
import donoWebp640 from '../assets/images/about/dono-sorrindo-640.webp'
import donoWebp1024 from '../assets/images/about/dono-sorrindo-1024.webp'
import donoWebp1600 from '../assets/images/about/dono-sorrindo-1600.webp'

import resgateAvif640 from '../assets/images/about/resgate-ar-livre-640.avif'
import resgateAvif1024 from '../assets/images/about/resgate-ar-livre-1024.avif'
import resgateAvif1600 from '../assets/images/about/resgate-ar-livre-1600.avif'
import resgateWebp640 from '../assets/images/about/resgate-ar-livre-640.webp'
import resgateWebp1024 from '../assets/images/about/resgate-ar-livre-1024.webp'
import resgateWebp1600 from '../assets/images/about/resgate-ar-livre-1600.webp'

// "NR-05, NR-06, ..., NR-35 e NBR 16710", a partir dos códigos da lista de treinamentos.
// O "word joiner" (U+2060, invisível) depois do hífen e o espaço fixo (U+00A0) impedem
// que um código fique partido entre duas linhas, como "NR-" numa linha e "12" na outra.
// (O hífen fixo U+2011 não existe na fonte Barlow e apareceria com outra fonte.)
function trainingCodes(): string {
  const codes = trainings.flatMap((training) =>
    training.code ? [training.code.replace('-', '-⁠').replace(' ', ' ')] : [],
  )
  return codes.length > 1 ? `${codes.slice(0, -1).join(', ')} e ${codes.at(-1)}` : codes.join('')
}

export const aboutContent: AboutContent = {
  hero: {
    // PROVISÓRIO: confirmar título com o cliente
    title: 'Segurança do trabalho é o nosso negócio',
    // PROVISÓRIO: confirmar texto com o cliente
    text: 'A MaulehSeg nasceu da vontade de levar segurança do trabalho de verdade para dentro das empresas. Vamos até você, conhecemos sua operação e entregamos documentação técnica e treinamentos que funcionam no dia a dia, e não apenas no papel.',
    action: { label: 'Fale conosco', href: paths.contact },
    image: {
      src: donoWebp1024,
      sources: [
        {
          type: 'image/avif',
          srcSet: `${donoAvif640} 640w, ${donoAvif1024} 1024w, ${donoAvif1600} 1600w`,
        },
        {
          type: 'image/webp',
          srcSet: `${donoWebp640} 640w, ${donoWebp1024} 1024w, ${donoWebp1600} 1600w`,
        },
      ],
      sizes: '(min-width: 1024px) 38vw, 92vw',
      width: 1599,
      height: 1200,
      alt: 'Maurício Alves, fundador da MaulehSeg',
    },
  },
  panoramic: {
    src: resgateWebp1600,
    sources: [
      {
        type: 'image/avif',
        srcSet: `${resgateAvif640} 640w, ${resgateAvif1024} 1024w, ${resgateAvif1600} 1600w`,
      },
      {
        type: 'image/webp',
        srcSet: `${resgateWebp640} 640w, ${resgateWebp1024} 1024w, ${resgateWebp1600} 1600w`,
      },
    ],
    sizes: '100vw',
    width: 1600,
    height: 1200,
    alt: '',
  },
  story: {
    eyebrow: 'Quem Somos',
    title: 'Da simplicidade à excelência: nossa história',
    // Texto enviado pelo cliente (com pequenos ajustes de pontuação e concordância).
    // PROVISÓRIO: o texto original continua depois de "consultoria completa, moderna…"; falta o final.
    paragraphs: [
      'Toda grande jornada começa com um primeiro passo, e a MaulehSeg nasceu exatamente assim: de forma simples e despretensiosa.',
      'Tudo começou quando Maurício Alves, o fundador, passou a ministrar treinamentos pontuais, movido pela paixão de compartilhar conhecimento e fazer a diferença no dia a dia dos trabalhadores.',
      'O que era para ser uma atuação pontual logo revelou algo maior. A forma prática, humanizada e descomplicada com que os treinamentos eram conduzidos chamou a atenção do mercado.',
      'Logo a demanda aumentou e, com ela, o compromisso de transformar a segurança do trabalho em um pilar estratégico para o sucesso das empresas.',
    ],
  },
  values: {
    id: 'valores',
    items: [
      {
        label: 'Missão',
        // PROVISÓRIO: aguardando texto oficial do cliente
        text: 'Prestar serviços de segurança do trabalho com excelência técnica, contribuindo para a preservação da saúde e integridade física dos trabalhadores e para a conformidade legal das empresas.',
        reversed: false,
        dark: false,
        noisy: true,
      },
      {
        label: 'Visão',
        // PROVISÓRIO: aguardando texto oficial do cliente
        text: 'Ser referência em consultoria e treinamentos de segurança do trabalho, reconhecidos pela qualidade, pela presença em campo e pelo comprometimento com resultados reais.',
        reversed: true,
        dark: true,
      },
      {
        // PROVISÓRIO: confirmar com Victor se é "Valores" ou outro título
        label: 'Valores',
        // PROVISÓRIO: aguardando texto oficial do cliente
        text: 'Ética, responsabilidade técnica, respeito às pessoas e compromisso com a prevenção. Acreditamos que segurança não é custo, é investimento.',
        reversed: false,
        dark: false,
        noisy: true,
      },
    ],
  },
  navCards: {
    label: 'Conheça mais sobre a MaulehSeg',
    items: [
      {
        // PROVISÓRIO
        title: 'Missão, Visão e Valores',
        description: 'Nossa razão de ser e os princípios que guiam cada atendimento.',
        href: '#valores',
      },
      {
        // Pedido do cliente: no lugar de "Serviços prestados"
        title: 'Consultoria em SST',
        description: 'PGR, laudos técnicos, eSocial SST e assessoria mensal.',
        href: paths.consulting,
      },
      {
        title: 'Treinamentos',
        // Todos os treinamentos da página, na ordem dela (atualiza sozinho quando a lista mudar)
        description: `${trainingCodes()}.`,
        href: paths.trainings,
      },
      {
        // PROVISÓRIO
        title: 'Fale conosco',
        description: 'Entre em contato para orçamentos e dúvidas.',
        href: paths.contact,
      },
    ],
  },
}
