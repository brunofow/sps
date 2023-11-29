import clsx from 'clsx'
import { ServiceType } from '@/types/services'
import {
  GiLargePaintBrush,
  GiBrickWall,
  GiTeePipe,
  GiLightBulb,
  GiGardeningShears
} from 'react-icons/gi'
import { FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useWorksContext } from '@/contexts/work.context'

const serviceObj = {
  pintor: (
    <GiLargePaintBrush size={36} className="rotate-[-135deg]  mt-[-8px]" />
  ),
  pedreiro: <GiBrickWall size={36} />,
  encanador: <GiTeePipe size={36} className=" mt-[-8px]" />,
  eletricista: <GiLightBulb size={36} />,
  jardineiro: <GiGardeningShears size={36} />
}

interface Props {
  serviceType: ServiceType
  border?: boolean
  isFilter?: boolean
}

export function ServiceIcon({ serviceType, border, isFilter }: Props) {
  const { addFilter, removeFilter } = useWorksContext()
  const [isSelected, setIsSelected] = useState(false)

  const onClickHandler = () => {
    if (isFilter) {
      if (isSelected) {
        setIsSelected(false)
        removeFilter(serviceType)
        return
      }
      setIsSelected(true)
      addFilter(serviceType)
    }
  }

  return (
    <div
      onClick={onClickHandler}
      className={clsx(
        'w-12 h-12 rounded-lg flex items-center justify-center text-primary relative',
        {
          'bg-white': !isSelected,
          'bg-primary': isSelected,
          'text-white': isSelected,
          'border-[#E1E1E1] border-2': border
        }
      )}
    >
      {serviceObj[serviceType]}
      {isSelected && (
        <FiX size={32} className="text-primary absolute bottom-[-2.5rem]" />
      )}
    </div>
  )
}
