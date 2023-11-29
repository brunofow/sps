import { useCallback, useLayoutEffect, useState } from 'react'

interface Scroll {
  x: number | null
  y: number | null
}

export function useWindowScroll() {
  const [scroll, setScroll] = useState<Scroll>({
    x: null,
    y: null
  })

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id)
    const headerHeight = document.querySelector('header')?.offsetHeight

    if (element && headerHeight) {
      window.scrollTo({
        top: element.offsetTop - headerHeight
      })
    }
  }, [])

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll({ x: window.pageXOffset, y: window.pageYOffset })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { ...scroll, scrollTo }
}
