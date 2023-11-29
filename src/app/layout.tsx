import { Header } from '@/components/Header'
import { Poppins, Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ContactProvider } from '@/contexts/contact.context'
import { contentfulApi } from '../services/api'
import { WorkProvider } from '@/contexts/work.context'
import './globals.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const montserrat = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: {
    template: 'SPS - %s',
    default: 'SPS - Souza Prestadora de Serviços'
  },
  description:
    'Serviços de pintor, pedreiro, encanador, eletricista e jardineiro.',
  keywords: [
    'SPS',
    'Souza Prestadora de Serviços',
    'Souza Serviços',
    'Pintor',
    'Pedreiro',
    'Encanador',
    'Eletricista',
    'Jardineiro',
    'Pintura',
    'Londrina'
  ]
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const contactResponse = await contentfulApi.get('contact')
  const worksResponse = await contentfulApi.get('works')

  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans`}>
        <ContactProvider contact={contactResponse}>
          <Header />
          <WorkProvider workRaw={worksResponse}>{children}</WorkProvider>
          <Footer />
        </ContactProvider>
      </body>
    </html>
  )
}
