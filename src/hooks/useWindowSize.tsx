import { useLayoutEffect, useState } from 'react'

interface Size {
  width: number | null
  height: number | null
}

export function useWindowSize() {
  const [size, setSize] = useState<Size>({
    width: null,
    height: null
  })
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 786)
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { size, isMobile }
}
