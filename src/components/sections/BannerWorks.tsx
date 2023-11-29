'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import Image from 'next/image'
import bannerImg from '../../../public/trabalhos-realizados.jpeg'
import { Heading } from '../Heading'

export function BannerWorks() {
  const { size, isMobile } = useWindowSize()

  return (
    <div
      style={{ height: size.height ?? '100vh' }}
      className="w-full flex justify-center"
    >
      <Image
        src={bannerImg}
        layout="fill"
        objectFit="cover"
        alt="Banner Trabalhos Realizados"
        className="absolute top-0 h-full"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary opacity-50"></div>
      <div className="px-8 absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-12 items-center justify-center">
        <Heading
          className="text-white md:w-2/4 text-center font-normal font-poppins"
          size={isMobile ? 'sm' : 'md'}
        >
          Confira nossa galeria de projetos concluídos, onde mostramos com
          orgulho os serviços impecáveis que realizamos para nossos clientes
          satisfeitos.{' '}
        </Heading>
      </div>
    </div>
  )
}
