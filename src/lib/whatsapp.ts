import { site } from '../content/site'

// PROVISÓRIO: confirmar com o Maurício que o telefone do site também é o WhatsApp.
const whatsappNumber = site.phone.href.replace(/\D/g, '')

/** Link que abre uma conversa no WhatsApp da empresa com a mensagem já escrita. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
