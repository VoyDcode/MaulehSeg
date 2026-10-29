/*
  Envio do formulário de orçamento por e-mail, pelo Web3Forms (o site não tem servidor).
  Como configurar:
  1. Em https://web3forms.com, gerar a chave com o e-mail que vai receber os pedidos
     (mauricio.maulehseg@hotmail.com). O Web3Forms manda a chave para esse e-mail.
  2. Colar a chave abaixo. Ela é pública por definição: o próprio Web3Forms orienta usá-la no navegador.
  Enquanto a chave estiver vazia, o formulário continua abrindo o WhatsApp com a mensagem pronta.
*/
// PROVISÓRIO: colar aqui a chave do Web3Forms do Maurício
const WEB3FORMS_ACCESS_KEY = ''

const ENDPOINT = 'https://api.web3forms.com/submit'

export const isQuoteEmailEnabled = WEB3FORMS_ACCESS_KEY.length > 0

export interface QuoteEmail {
  name: string
  company: string
  email: string
  phone: string
  serviceLabel: string
  message: string
}

/** Envia o pedido. Dá erro (throw) se a rede falhar ou o Web3Forms recusar. */
export async function sendQuoteEmail(quote: QuoteEmail): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
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

  const result: { success?: boolean; message?: string } = await response.json().catch(() => ({}))
  if (!response.ok || result.success === false) {
    throw new Error(result.message ?? `Web3Forms respondeu ${response.status}`)
  }
}
