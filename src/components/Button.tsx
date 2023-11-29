import { Slot } from '@radix-ui/react-slot'

interface Props {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  asChild?: boolean
  className?: string
}

export function Button({
  children,
  color = 'primary',
  asChild,
  className
}: Props) {
  const Comp = asChild ? Slot : 'button'

  const primaryClass = 'bg-primary text-white'
  const secondaryClass = 'bg-white text-primary'
  const buttonColor = color === 'primary' ? primaryClass : secondaryClass

  return (
    <Comp
      className={`${buttonColor} px-8 py-3 rounded-lg font-bold flex justify-center hover:brightness-75 transition-all ${className}`}
    >
      {children}
    </Comp>
  )
}
