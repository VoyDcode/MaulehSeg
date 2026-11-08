/// <reference types="vite/client" />

// Variáveis de ambiente do site (arquivo .env na raiz do projeto)
interface ImportMetaEnv {
  /** Chave de acesso do Web3Forms, usada no formulário de orçamento (src/lib/quote-email.ts). */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
