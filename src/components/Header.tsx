'use client'

import { useWindowScroll } from '@/hooks/useWindowScroll'
import { NavMenu } from './NavMenu'
import { Logo } from './svg/Logo'
import Link from 'next/link'

export function Header() {
  const { y } = useWindowScroll()
  const isScrolled = !!y

  return (
    <>
      {y !== null && (
        <header
          className={`w-full px-4 md:px-8 py-3 flex justify-between items-center fixed z-50 transition-all drop-shadow-lg animate-op animate-fade ${
            isScrolled ? 'bg-white' : 'bg-none'
          }`}
        >
          <Link href="/">
            <Logo
              className="w-[200px] lg:w-[245px]"
              color={isScrolled ? 'dark' : 'light'}
            />
          </Link>

          <NavMenu isScrolled={isScrolled} />
        </header>
      )}
    </>
  )
}
