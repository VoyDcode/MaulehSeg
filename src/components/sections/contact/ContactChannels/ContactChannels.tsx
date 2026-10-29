import type { ComponentType, SVGProps } from 'react'
import type { ContactChannel, ContactPageContent } from '../../../../types/content'
import { MailIcon, MapPinIcon, MessageIcon, PhoneIcon } from '../../../ui/icons'
import styles from './ContactChannels.module.css'

const icons: Record<ContactChannel['kind'], ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: MessageIcon,
  phone: PhoneIcon,
  email: MailIcon,
  address: MapPinIcon,
}

function ChannelBody({ channel }: { channel: ContactChannel }) {
  const Icon = icons[channel.kind]

  return (
    <>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{channel.label}</span>
        <span className={styles.value}>{channel.value}</span>
      </span>
    </>
  )
}

export function ContactChannels({ content }: { content: ContactPageContent['channels'] }) {
  return (
    <div className={styles.channels}>
      <h2 className={styles.title}>{content.title}</h2>
      <ul className={styles.list}>
        {content.items.map((channel) => (
          <li key={channel.kind}>
            {channel.href ? (
              <a
                href={channel.href}
                className={styles.channel}
                {...(channel.kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <ChannelBody channel={channel} />
              </a>
            ) : (
              <div className={styles.channel}>
                <ChannelBody channel={channel} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
