import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
  className?: string
  responsive?: boolean
}

export function Text({
  size = 'md',
  children,
  asChild,
  className,
  responsive
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'font-poppins',
        responsive
          ? {
              'text-sm lg:text-base': size === 'md',
              'text-base lg:text-xl': size === 'lg'
            }
          : {
              'text-sm': size === 'sm',
              'text-base': size === 'md',
              'text-xl': size === 'lg'
            },
        className
      )}
    >
      {children}
    </Comp>
  )
}
