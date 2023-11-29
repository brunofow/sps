import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
  id?: string
}

export function Heading({
  size = 'md',
  children,
  asChild,
  className,
  id
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      id={id}
      className={clsx(
        'font-bold font-montserrat',
        {
          'text-2xl': size === 'sm',
          'text-3xl': size === 'md',
          'text-4xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
