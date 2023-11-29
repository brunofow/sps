'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Text } from './Text'
import { Logo } from './svg/Logo'
import { useWindowSize } from '@/hooks/useWindowSize'
import { WhatsappLink } from './WhatsappLink'
import { ScrollTo } from './ScrollTo'
import { HeaderLink } from './HeaderLink'

export function NavMenu({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useWindowSize()

  function handleToggleMenu() {
    setIsOpen(!isOpen)
  }

  if (isMobile) {
    return (
      <>
        <nav
          className={`flex flex-col items-center gap-11 absolute bg-white top-0 left-0 right-0 transition-all overflow-hidden ${
            isOpen ? 'h-96' : 'h-0'
          }`}
        >
          <Logo className="w-[200px] mt-2" color="dark" />
          <FiX
            size={32}
            className="absolute top-4 right-4"
            onClick={handleToggleMenu}
          />
          <ul className="flex flex-col gap-8 items-center w-full">
            <Text>
              <li onClick={handleToggleMenu} className="py-2">
                <ScrollTo scrollToId="nossos-servicos">
                  Nossos Serviços
                </ScrollTo>
              </li>
            </Text>
            <Text>
              <li onClick={handleToggleMenu}>
                <ScrollTo scrollToId="trabalhos-realizados">
                  Trabalhos Realizados
                </ScrollTo>
              </li>
            </Text>
            <Text>
              <li onClick={handleToggleMenu}>
                <ScrollTo scrollToId="sobre-nos">Sobre Nós</ScrollTo>
              </li>
            </Text>
          </ul>
          <WhatsappLink>Contato</WhatsappLink>
        </nav>
        <FiMenu
          color={isScrolled ? '#000' : '#fff'}
          size={46}
          onClick={handleToggleMenu}
        />
      </>
    )
  }

  return (
    <nav className="flex gap-4 lg:gap-11 items-center">
      <ul
        className={`flex gap-4 lg:gap-11 items-center w-full ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      >
        <ScrollTo scrollToId="nossos-servicos">
          <HeaderLink color={isScrolled ? 'dark' : 'light'}>
            Nossos Serviços
          </HeaderLink>
        </ScrollTo>
        <ScrollTo scrollToId="trabalhos-realizados">
          <HeaderLink color={isScrolled ? 'dark' : 'light'}>
            Trabalhos Realizados
          </HeaderLink>
        </ScrollTo>
        <ScrollTo scrollToId="sobre-nos">
          <HeaderLink color={isScrolled ? 'dark' : 'light'}>
            Sobre Nós
          </HeaderLink>
        </ScrollTo>
      </ul>
      <WhatsappLink buttonColor={isScrolled ? 'primary' : 'secondary'}>
        Contato
      </WhatsappLink>
    </nav>
  )
}
