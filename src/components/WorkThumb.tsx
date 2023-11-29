'use client'

import { Text } from './Text'
import { ServiceType } from '@/types/services'
import { ServiceIcon } from './ServiceIcon'
import { WorksLightBox } from './WorksLightbox'
import { useState, useRef } from 'react'

interface Props {
  src: string
  title: string
  category: ServiceType[]
  images: string[]
}

export function WorkThumb({ src, title, category, images }: Props) {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  function closeLightBox() {
    setIsLightBoxOpen(false)
  }
  function toogleTolltip() {
    setIsTooltipVisible(!isTooltipVisible)
  }

  return (
    <>
      <div
        className=" select-none relative flex flex-col gap-4 cursor-pointer"
        onClick={() => setIsLightBoxOpen(true)}
        onMouseEnter={toogleTolltip}
        onMouseLeave={toogleTolltip}
      >
        <div className="absolute flex gap-4 top-4 right-4">
          {category.map(serviceType => (
            <ServiceIcon
              key={serviceType}
              serviceType={serviceType}
              border={true}
            />
          ))}
        </div>
        <img
          src={src}
          alt="title"
          className="rounded-xl w-full h-80 object-cover"
        />
        <Text size="lg">{title}</Text>
        <div
          role="tooltip"
          className={`absolute z-10  px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm tooltip bg-primary animate-fade ${
            isTooltipVisible ? 'inline-block' : 'hidden'
          } `}
        >
          Clique para ver mais fotos
        </div>
      </div>

      <WorksLightBox
        images={[src, ...images]}
        isOpen={isLightBoxOpen}
        close={closeLightBox}
      />
    </>
  )
}
