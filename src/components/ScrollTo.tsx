import { useWindowScroll } from '@/hooks/useWindowScroll'

interface Props {
  children: React.ReactNode
  scrollToId: string
}

export function ScrollTo({ children, scrollToId }: Props) {
  const { scrollTo } = useWindowScroll()

  return (
    <span className="cursor-pointer" onClick={() => scrollTo(scrollToId)}>
      {children}
    </span>
  )
}
