import { Heading } from '@/components/Heading'
import { ServiceCard } from '../ServiceCard'

export function Services() {
  return (
    <section
      id="nossos-servicos"
      className="bg-gray-100 px-8 md:px-14 py-20 flex flex-col"
    >
      <Heading size="lg" className="text-primary text-center ">
        Nossos Serviços
      </Heading>

      <div
        className={`flex justify-center flex-wrap gap-4 md:gap-16 items-center mt-20`}
      >
        <ServiceCard serviceType="pintor" />
        <ServiceCard serviceType="pedreiro" />
        <ServiceCard serviceType="encanador" />
        <ServiceCard serviceType="eletricista" />
        <ServiceCard serviceType="jardineiro" />
      </div>
    </section>
  )
}
