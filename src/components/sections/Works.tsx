import { Heading } from '../Heading'
import { Button } from '../Button'
import Link from 'next/link'
import { WorksGallery } from '../WorksGallery'

export function Works() {
  return (
    <section
      id="trabalhos-realizados"
      className="flex flex-col items-center px-8 py-16 md:px-14"
    >
      <Heading className="text-primary text-center">
        Trabalhos Realizados
      </Heading>

      <WorksGallery className="mt-20" limit={6} />

      <Button className="mt-8" asChild>
        <Link href="/trabalhos-realizados">Ver mais</Link>
      </Button>
    </section>
  )
}
