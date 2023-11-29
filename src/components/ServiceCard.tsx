import type { ServiceType } from '../types/services'
import {
  GiLargePaintBrush,
  GiBrickWall,
  GiTeePipe,
  GiLightBulb,
  GiGardeningShears
} from 'react-icons/gi'
import { Text } from './Text'

interface ServiceCard {
  serviceType: ServiceType
}

const serviceObj = {
  pintor: {
    title: 'Pintor',
    icon: (
      <GiLargePaintBrush size={64} className="rotate-[-135deg] text-primary" />
    ),
    description:
      'Pintura de qualidade para valorizar cada detalhe do seu espaço interno ou externo.'
  },
  pedreiro: {
    title: 'Pedreiro',
    icon: <GiBrickWall size={64} className="text-primary" />,
    description:
      'Construções e reformas feitas com comprometimento e eficiência.'
  },
  encanador: {
    title: 'Encanador',
    icon: <GiTeePipe size={64} className="text-primary" />,
    description:
      'Soluções eficientes para vazamentos e problemas hidráulicos, encanamentos funcionais e livres de preocupações.'
  },
  eletricista: {
    title: 'Eletricista',
    icon: <GiLightBulb size={64} className="text-primary" />,
    description:
      'Instalações elétricas seguras e de alta qualidade para sua tranquilidade.'
  },
  jardineiro: {
    title: 'Jardineiro',
    icon: <GiGardeningShears size={64} className="text-primary" />,
    description:
      'Crie um jardim dos seus sonhos com a ajuda do nosso jardineiro especializado. Beleza, harmonia e cuidado em cada detalhe.'
  }
}

export function ServiceCard({ serviceType }: ServiceCard) {
  const service = serviceObj[serviceType]

  return (
    <div className="w-64 h-80 py-4 px-8 bg-white rounded-lg flex flex-col items-center gap-5">
      {service.icon}
      <Text className="text-primary font-bold" size="lg">
        {service.title}
      </Text>

      <Text asChild size="sm" className="text-center">
        <p>{service.description}</p>
      </Text>
    </div>
  )
}
