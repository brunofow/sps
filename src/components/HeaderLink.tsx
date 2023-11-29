import { Text } from './Text'

interface Props {
  children: string
  color?: 'dark' | 'light'
}

export function HeaderLink({ children, color }: Props) {
  const bgClass = color === 'dark' ? 'bg-primary' : 'bg-white'

  return (
    <Text>
      <li className="group cursor-pointer select-none">
        {children}
        <span
          className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${bgClass}`}
        ></span>
      </li>
    </Text>
  )
}
