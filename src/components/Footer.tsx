'use client'

import { useContactContext } from '@/contexts/contact.context'
import { Text } from './Text'
import { Logo } from './svg/Logo'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import Link from 'next/link'

export function Footer() {
  const {
    contactInfo: { facebook, instagram }
  } = useContactContext()

  return (
    <footer className="py-4 gap-4 flex flex-col  items-center bg-primary text-white lg:flex-row lg:justify-between lg:px-14">
      <div className="flex flex-col items-center">
        <Logo color="light" width={235} />
        <Text>© {new Date().getFullYear()} Souza Prestadora de Serviços</Text>
      </div>

      <div className="flex gap-4">
        <Link href={facebook ?? '/'} target="_blank">
          <FiFacebook size={42} />
        </Link>
        <Link href={instagram ?? '#'} target="_blank">
          <FiInstagram size={42} />
        </Link>
      </div>
    </footer>
  )
}
