import { useId, useState, type FormEvent, type HTMLInputTypeAttribute } from 'react'
import { cx } from '../../../../lib/cx'
import { isQuoteEmailEnabled, sendQuoteEmail } from '../../../../lib/quote-email'
import { standardWhatsappMessage, whatsappUrl } from '../../../../lib/whatsapp'
import type { QuoteOptionGroup } from '../../../../types/content'
import { Button } from '../../../ui/Button/Button'
import { AlertIcon, CheckIcon, MessageIcon } from '../../../ui/icons'
import styles from './QuoteForm.module.css'

/*
  Formulário de orçamento do Figma ("Tem algum projeto em mente?").
  - Com a chave do Web3Forms configurada (lib/quote-email.ts), o pedido chega por e-mail.
  - Sem a chave, o envio monta a mensagem e abre o WhatsApp da empresa.
  Nos dois casos, o link "Chamar no WhatsApp" abre uma mensagem padrão com o serviço escolhido.
*/

type SendStatus =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sentByEmail' }
  | { kind: 'sentByWhatsapp'; url: string }
  | { kind: 'failed'; whatsappUrl: string }

type FieldName = 'name' | 'company' | 'email' | 'phone' | 'service' | 'message' | 'consent'
type FieldErrors = Partial<Record<FieldName, string>>

// Ordem visual dos campos: o foco vai para o primeiro com erro.
const FIELD_ORDER: FieldName[] = ['name', 'company', 'email', 'phone', 'service', 'message', 'consent']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

interface QuoteValues {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

function readForm(form: HTMLFormElement): QuoteValues {
  const data = new FormData(form)
  const text = (name: FieldName) => String(data.get(name) ?? '').trim()

  return {
    name: text('name'),
    company: text('company'),
    email: text('email'),
    phone: text('phone'),
    service: text('service'),
    message: text('message'),
    consent: data.get('consent') === 'on',
  }
}

function validate(values: QuoteValues): FieldErrors {
  const errors: FieldErrors = {}
  const phoneDigits = values.phone.replace(/\D/g, '')

  if (values.name.length < 3) errors.name = 'Informe o seu nome.'
  if (!values.email) errors.email = 'Informe o seu e-mail.'
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Confira o e-mail. Exemplo: nome@empresa.com.br'
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = 'Informe o telefone com DDD. Exemplo: (11)\u00a091234-5678'
  }
  if (!values.service) errors.service = 'Escolha o serviço, treinamento ou consultoria.'
  if (!values.consent) errors.consent = 'Para enviar, marque a autorização de contato.'

  return errors
}

function buildMessage(values: QuoteValues, serviceLabel: string): string {
  const lines = [
    'Olá! Vim pelo site da MaulehSeg e gostaria de um orçamento.',
    '',
    `*Interesse:* ${serviceLabel}`,
    `*Nome:* ${values.name}`,
  ]
  if (values.company) lines.push(`*Empresa:* ${values.company}`)
  lines.push(`*E-mail:* ${values.email}`, `*Telefone:* ${values.phone}`)
  if (values.message) lines.push('', `*Mensagem:* ${values.message}`)

  return lines.join('\n')
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null

  return (
    <p id={id} className={styles.error}>
      <AlertIcon className={styles.errorIcon} />
      {message}
    </p>
  )
}

function RequiredMark() {
  return (
    <span className={styles.required} aria-hidden="true">
      *
    </span>
  )
}

interface TextFieldProps {
  id: string
  name: FieldName
  label: string
  type?: HTMLInputTypeAttribute
  autoComplete: string
  required?: boolean
  error?: string
}

function TextField({ id, name, label, type = 'text', autoComplete, required = false, error }: TextFieldProps) {
  const errorId = `${id}-erro`

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <RequiredMark />}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={styles.input}
      />
      <FieldError id={errorId} message={error} />
    </div>
  )
}

interface QuoteFormProps {
  groups: QuoteOptionGroup[]
  /** Opção já escolhida no campo de tipo de serviço (o item da página). Vazio: nenhuma. */
  defaultService?: string
  messageLabel: string
  /** dark: sobre a faixa azul (páginas de detalhe). light: dentro de um card branco (/contato). */
  tone?: 'dark' | 'light'
}

export function QuoteForm({ groups, defaultService = '', messageLabel, tone = 'dark' }: QuoteFormProps) {
  const baseId = useId()
  const fieldId = (name: FieldName) => `${baseId}-${name}`
  const [errors, setErrors] = useState<FieldErrors>({})
  const [hasTriedToSend, setHasTriedToSend] = useState(false)
  const [status, setStatus] = useState<SendStatus>({ kind: 'idle' })
  // Serviço escolhido no momento, para a mensagem padrão do link do WhatsApp
  const [service, setService] = useState(defaultService)

  const options = groups.flatMap((group) => group.options)
  // Só as páginas do site (href começando com /) entram na mensagem; "Outro assunto" fica genérico.
  const labelFor = (value: string) =>
    value.startsWith('/') ? options.find((option) => option.href === value)?.label : undefined

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = readForm(form)
    const nextErrors = validate(values)
    setHasTriedToSend(true)
    setErrors(nextErrors)

    const firstInvalid = FIELD_ORDER.find((name) => nextErrors[name])
    if (firstInvalid) {
      setStatus({ kind: 'idle' })
      document.getElementById(fieldId(firstInvalid))?.focus()
      return
    }

    const serviceLabel = options.find((option) => option.href === values.service)?.label ?? values.service
    const whatsappWithQuote = whatsappUrl(buildMessage(values, serviceLabel))

    // Campo escondido que só robôs preenchem: finge que enviou e não manda nada
    if (new FormData(form).get('website')) {
      setStatus({ kind: 'sentByEmail' })
      return
    }

    if (!isQuoteEmailEnabled) {
      window.open(whatsappWithQuote, '_blank', 'noopener,noreferrer')
      setStatus({ kind: 'sentByWhatsapp', url: whatsappWithQuote })
      return
    }

    setStatus({ kind: 'sending' })
    try {
      await sendQuoteEmail({ ...values, serviceLabel })
      form.reset()
      setService(defaultService)
      setHasTriedToSend(false)
      setErrors({})
      setStatus({ kind: 'sentByEmail' })
    } catch {
      setStatus({ kind: 'failed', whatsappUrl: whatsappWithQuote })
    }
  }

  // Depois da primeira tentativa, os erros somem assim que o campo é corrigido.
  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const values = readForm(event.currentTarget)
    setService(values.service)
    if (hasTriedToSend) setErrors(validate(values))
  }

  const isSending = status.kind === 'sending'
  const standardWhatsapp = whatsappUrl(standardWhatsappMessage(labelFor(service)))

  const describedBy = (name: FieldName) => (errors[name] ? `${fieldId(name)}-erro` : undefined)

  return (
    <form
      className={cx(styles.form, tone === 'light' && styles.light)}
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className={styles.grid}>
        <TextField id={fieldId('name')} name="name" label="Nome completo" autoComplete="name" required error={errors.name} />
        <TextField id={fieldId('company')} name="company" label="Empresa" autoComplete="organization" error={errors.company} />
        <TextField
          id={fieldId('email')}
          name="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
        <TextField
          id={fieldId('phone')}
          name="phone"
          label="Telefone ou WhatsApp"
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId('service')} className={styles.label}>
          Tipo de serviço
          <RequiredMark />
        </label>
        <select
          id={fieldId('service')}
          name="service"
          defaultValue={defaultService}
          required
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={describedBy('service')}
          className={styles.select}
        >
          <option value="" disabled>
            Selecione o tipo de serviço
          </option>
          {groups.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map((option) => (
                <option key={option.href} value={option.href}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <FieldError id={`${fieldId('service')}-erro`} message={errors.service} />
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId('message')} className={styles.label}>
          {messageLabel}
        </label>
        <textarea id={fieldId('message')} name="message" rows={4} maxLength={800} className={styles.textarea} />
      </div>

      <div className={styles.field}>
        <div className={styles.consent}>
          <input
            id={fieldId('consent')}
            name="consent"
            type="checkbox"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={describedBy('consent')}
            className={styles.checkbox}
          />
          {/* PROVISÓRIO (LGPD): linkar a Política de Privacidade quando o texto do cliente chegar */}
          <label htmlFor={fieldId('consent')} className={styles.consentLabel}>
            Autorizo a MaulehSeg a usar estes dados só para responder a este pedido.
            <RequiredMark />
          </label>
        </div>
        <FieldError id={`${fieldId('consent')}-erro`} message={errors.consent} />
      </div>

      {/* Armadilha para robôs: fica fora da tela e fora da navegação por teclado */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Deixe este campo em branco
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.actions}>
        <Button type="submit" className={styles.submit} disabled={isSending} aria-disabled={isSending}>
          {isSending ? 'Enviando…' : 'Enviar'}
        </Button>
        <p className={styles.note}>
          {isQuoteEmailEnabled
            ? 'Campos com * são obrigatórios. O pedido chega por e-mail para a MaulehSeg.'
            : 'Campos com * são obrigatórios. Ao enviar, o WhatsApp abre com a sua mensagem pronta.'}
        </p>
      </div>

      <p className={styles.whatsapp}>
        Prefere conversar agora?{' '}
        <a href={standardWhatsapp} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
          <MessageIcon className={styles.whatsappIcon} />
          Chamar no WhatsApp
        </a>
      </p>

      <output className={styles.status}>
        {status.kind === 'sending' && <span className={styles.sending}>Enviando o seu pedido…</span>}
        {status.kind === 'sentByEmail' && (
          <span className={styles.success}>
            <CheckIcon className={styles.successIcon} />
            <span>Pedido enviado! A MaulehSeg vai responder pelo e-mail ou telefone que você informou.</span>
          </span>
        )}
        {status.kind === 'sentByWhatsapp' && (
          <span className={styles.success}>
            <CheckIcon className={styles.successIcon} />
            <span>
              Pronto! Abrimos o WhatsApp com a sua mensagem. Se ele não abriu,{' '}
              <a href={status.url} target="_blank" rel="noopener noreferrer" className={styles.successLink}>
                clique aqui para abrir
              </a>
              .
            </span>
          </span>
        )}
        {status.kind === 'failed' && (
          <span className={styles.failure}>
            <AlertIcon className={styles.failureIcon} />
            <span>
              Não conseguimos enviar agora. Tente de novo em instantes ou{' '}
              <a href={status.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.successLink}>
                mande o pedido pelo WhatsApp
              </a>
              .
            </span>
          </span>
        )}
      </output>
    </form>
  )
}
