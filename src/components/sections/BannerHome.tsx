'use client'
import Image from 'next/image'
import bannerImg from '../../../public/hero-banner.jpeg'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { FiChevronsDown } from 'react-icons/fi'
import { useWindowSize } from '@/hooks/useWindowSize'
import { WhatsappLink } from '../WhatsappLink'
import { ScrollTo } from '../ScrollTo'

export function BannerHome() {
  const { size, isMobile } = useWindowSize()

  return (
    <div style={{ height: size.height ?? '100vh' }}>
      <Image
        src={bannerImg}
        layout="fill"
        objectFit="cover"
        alt="Banner Souza Prestadora de Serviços"
        className="absolute top-0 h-full"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary opacity-50"></div>
      <div className="px-8 absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-12 items-center justify-center">
        <Heading
          className="text-white md:w-2/4 text-center font-normal font-poppins"
          size={isMobile ? 'sm' : 'md'}
        >
          Profissionais qualificados para todas as suas necessidades de
          construção, reforma e manutenção em Londrina e região
        </Heading>

        <WhatsappLink buttonColor={'secondary'}>
          Fazer pré-orçamento agora
        </WhatsappLink>
        <ScrollTo scrollToId="nossos-servicos">
          <FiChevronsDown
            size={32}
            className="text-white absolute bottom-12 animate-bounce"
          />
        </ScrollTo>
      </div>
    </div>
  )
}
