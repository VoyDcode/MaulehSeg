import type { ClientLogo } from '../types/content'

import swaRealty from '../assets/images/clients/swa-realty.webp'
import arcosEstruturas from '../assets/images/clients/arcos-estruturas.webp'
import gatLogistica from '../assets/images/clients/gat-logistica.webp'
import slitteraco from '../assets/images/clients/slitteraco.webp'
import consigaz from '../assets/images/clients/consigaz.webp'
import mauserPackaging from '../assets/images/clients/mauser-packaging.webp'
import taymontAndaimes from '../assets/images/clients/taymont-andaimes.webp'

/*
  Logos tirados dos sites e perfis oficiais de cada cliente, sem recolorir.
  SWA e GAT só têm versão branca, por isso usam o card escuro (onDark).
  A Casa Cirineu não tem logo e aparece pelo nome.
  A ordem afasta os dois cards escuros, no carrossel e na grade do celular.
*/
export const clients: ClientLogo[] = [
  { name: 'SWA Realty', logo: { src: swaRealty, width: 188, height: 114 }, onDark: true },
  { name: 'Arcos Estruturas Metálicas', logo: { src: arcosEstruturas, width: 368, height: 200 } },
  { name: 'Slitteraço', logo: { src: slitteraco, width: 114, height: 121 } },
  { name: 'Consigaz', logo: { src: consigaz, width: 181, height: 27 } },
  { name: 'Mauser Packaging Solutions', logo: { src: mauserPackaging, width: 400, height: 111 } },
  { name: 'GAT Logística', logo: { src: gatLogistica, width: 400, height: 139 }, onDark: true },
  { name: 'Casa Cirineu' },
  { name: 'Taymont Andaimes', logo: { src: taymontAndaimes, width: 194, height: 140 } },
]
