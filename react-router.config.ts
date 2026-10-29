import type { Config } from '@react-router/dev/config'
import { detailPaths } from './src/content/detail-paths'

export default {
  appDirectory: 'src',
  ssr: false,
  async prerender({ getStaticPaths }) {
    // getStaticPaths() só devolve as rotas sem parâmetro. As páginas de detalhe
    // vêm da lista de conteúdo, para cada slug virar um HTML estático.
    return [...getStaticPaths(), ...detailPaths]
  },
} satisfies Config
