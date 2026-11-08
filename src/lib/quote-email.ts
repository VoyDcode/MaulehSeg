/*
  Envio do formulário de orçamento por e-mail, pelo Web3Forms (o site não tem servidor).

  Funciona no plano gratuito (250 envios por mês):
  - o envio sai do navegador de quem preenche o formulário. No plano grátis o Web3Forms
    só aceita envio pelo navegador (envio a partir de servidor é do plano pago);
  - só usamos campos do plano grátis: subject, from_name e replyto. Cópia para outros
    e-mails (ccemail), anexo, resposta automática e webhook são do plano pago.
  Se o envio falhar (chave errada, limite do mês atingido, sem internet), o formulário
  oferece mandar o mesmo pedido pelo WhatsApp.

  Chave de acesso (é pública por definição: o próprio Web3Forms orienta usá-la no navegador):
  1. Em https://web3forms.com, criar a chave com o e-mail que vai receber os pedidos
     (mauricio.maulehseg@hotmail.com). A chave chega nesse e-mail.
  2. Colar a chave no arquivo .env, na raiz do projeto: VITE_WEB3FORMS_ACCESS_KEY=...
  Para testar com uma chave sua sem mexer no .env, crie um .env.local (fica fora do git).
  O Vite lê a chave no build: depois de mudar, reinicie o npm run dev.
  Sem chave, o formulário abre o WhatsApp com a mensagem pronta.
*/
const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim()

const ENDPOINT = 'https://api.web3forms.com/submit'

/** Sem resposta nesse tempo, o envio é dado como falho e o formulário oferece o WhatsApp. */
const TIMEOUT_MS = 15_000

export const isQuoteEmailEnabled = ACCESS_KEY.length > 0

export interface QuoteEmail {
  name: string
  company: string
  email: string
  phone: string
  serviceLabel: string
  message: string
}

/**
 * Respostas do Web3Forms: no sucesso e nos erros de validação a mensagem vem em body.message;
 * no limite de envios (429) vem em message; no erro interno (500) vem em error.
 */
interface Web3FormsResponse {
  success?: boolean
  message?: string
  error?: string
  body?: { message?: string }
}

/** Envia o pedido. Dá erro (throw) se a rede falhar, demorar demais ou o Web3Forms recusar. */
export async function sendQuoteEmail(quote: QuoteEmail): Promise<void> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Pedido de orçamento pelo site: ${quote.serviceLabel}`,
        from_name: 'Site MaulehSeg',
        // "Responder" no e-mail vai direto para quem pediu o orçamento
        replyto: quote.email,
        Nome: quote.name,
        Empresa: quote.company || 'Não informada',
        'E-mail': quote.email,
        Telefone: quote.phone,
        Interesse: quote.serviceLabel,
        Mensagem: quote.message || 'Sem mensagem',
      }),
    })

    const result: Web3FormsResponse = await response.json().catch(() => ({}))
    if (!response.ok || result.success !== true) {
      const reason = result.body?.message ?? result.message ?? result.error
      throw new Error(reason ?? `Web3Forms respondeu ${response.status}`)
    }
  } finally {
    window.clearTimeout(timer)
  }
}
