import { useContactContext } from '@/contexts/contact.context'
import { Button } from './Button'
import Link from 'next/link'

const URL = 'https://wa.me/55'

interface Props {
  children: React.ReactNode
  buttonColor?: 'primary' | 'secondary'
}

export function WhatsappLink({ children, buttonColor = 'primary' }: Props) {
  const {
    contactInfo: { whatsapp }
  } = useContactContext()

  return (
    <Button asChild color={buttonColor}>
      <Link target="_blank" href={URL + whatsapp}>
        {children}
      </Link>
    </Button>
  )
}
