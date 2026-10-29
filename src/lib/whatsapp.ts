import { site } from '../content/site'

// PROVISÓRIO: confirmar com o Maurício que o telefone do site também é o WhatsApp.
const whatsappNumber = site.phone.href.replace(/\D/g, '')

/** Link que abre uma conversa no WhatsApp da empresa com a mensagem já escrita. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Mensagem padrão para quem prefere chamar no WhatsApp: cita o serviço quando ele já foi escolhido. */
export function standardWhatsappMessage(serviceLabel?: string): string {
  return serviceLabel
    ? `Olá! Vim pelo site da MaulehSeg e gostaria de um orçamento para ${serviceLabel}.`
    : 'Olá! Vim pelo site da MaulehSeg e gostaria de um orçamento.'
}
