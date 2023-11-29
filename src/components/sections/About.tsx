'use client'

import { Heading } from '../Heading'
import { Text } from '../Text'
import Image from 'next/image'
import painterImage from '../../../public/sobre-nos.jpg'
import { WhatsappLink } from '../WhatsappLink'

export function About() {
  return (
    <section
      id="sobre-nos"
      className="bg-gray-100 px-8 md:px-14 py-8 lg:py-20 flex flex-col relative"
    >
      <Heading size="lg" className="text-primary text-center z-10">
        Sobre Nós
      </Heading>

      <div className="flex gap-28 mt-8 lg:mt-20">
        <div className="flex flex-col justify-between gap-8 text-center flex-1 h-full z-10">
          <Text asChild size="lg" responsive={true}>
            <p>
              Bem-vindo à Souza Prestadora de Serviços, somos uma empresa com
              sede em Londrina e atuação em toda região dedicada a oferecer
              serviços de qualidade.
            </p>
          </Text>

          <Text asChild size="lg" responsive={true}>
            <p>
              Iniciamos nossa jornada como especialistas em pintura, mas, ao
              longo dos anos, expandimos nossas capacidades e hoje contamos com
              uma equipe qualificada de pedreiros, eletricistas e encanadores
              para atender todas as suas necessidades de construção, reforma e
              manutenção.
            </p>
          </Text>

          <Text asChild size="lg" responsive={true}>
            <p>
              Na Souza Prestadora de Serviços, a satisfação do cliente é nossa
              prioridade. Valorizamos cada projeto como se fosse nosso próprio,
              garantindo que cada detalhe seja executado com precisão e atenção
              aos requisitos específicos. Nossa abordagem personalizada nos
              permite compreender suas necessidades individuais e superar suas
              expectativas, tanto em termos de qualidade quanto de prazos.
            </p>
          </Text>

          <Text asChild size="lg" responsive={true}>
            <p>
              Esteja você procurando por um novo visual em sua casa, reparos
              elétricos ou soluções para problemas hidráulicos, a Souza
              Prestadora de Serviços é a escolha certa. Entre em contato conosco
              hoje mesmo e deixe-nos mostrar por que somos reconhecidos como uma
              empresa confiável e de confiança. Estamos ansiosos para sermos seu
              parceiro confiável em todos os seus projetos de construção,
              reforma e manutenção.
            </p>
          </Text>

          <WhatsappLink>Fazer pré-orçamento</WhatsappLink>
        </div>

        <Image
          src={painterImage}
          alt="Sobre nós"
          className="flex-1 h-full lg:h-[48rem] object-cover absolute lg:relative top-0 left-0"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-80 lg:hidden"></div>
      </div>
    </section>
  )
}
