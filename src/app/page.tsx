import { About } from '@/components/sections/About'
import { BannerHome } from '@/components/sections/BannerHome'
import { Services } from '@/components/sections/Services'
import { Works } from '@/components/sections/Works'

export default function Home() {
  return (
    <main>
      <BannerHome />
      <Services />
      <Works />
      <About />
    </main>
  )
}
