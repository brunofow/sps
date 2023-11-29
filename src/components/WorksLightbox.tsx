import { Lightbox, SlideImage } from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

interface Props {
  images: string[]
  isOpen: boolean
  close: () => void
}

export function WorksLightBox({ images, isOpen, close }: Props) {
  const slides: SlideImage[] = images.map(image => {
    return { src: image }
  })

  return (
    <Lightbox
      plugins={[Thumbnails, Zoom]}
      thumbnails={{
        borderRadius: 8
      }}
      open={isOpen}
      close={close}
      slides={slides}
    />
  )
}
