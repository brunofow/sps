import { ServiceFilter } from '@/components/ServiceFilter'
import { WorksGallery } from '@/components/WorksGallery'
import { BannerWorks } from '@/components/sections/BannerWorks'

export const metadata = {
  title: 'Trabalhos Realizados',
  description: 'Veja uma seleção dos nossos trabalhos anteriores.',
  keywords: [
    'Trabalhos realizados',
    'Trabalhos',
    'Portfolio',
    'Serviços',
    'Serviços Londrina'
  ]
}

export default function Works() {
  return (
    <main>
      <BannerWorks />
      <section className="px-8 ">
        <ServiceFilter />

        <WorksGallery className="mb-20" />
      </section>
    </main>
  )
}
