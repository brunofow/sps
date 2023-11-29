import { ServiceType } from '@/types/services'
import { WorkRaw, Work } from '@/types/work'

export function formatWorkRaw(workRaw: WorkRaw): Work[] {
  let works: Work[] = []
  let images: { id: string; url: string }[] = []

  workRaw.includes.Asset.forEach(asset => {
    images.push({
      id: asset.sys.id,
      url: `https://${asset.fields.file.url}`
    })
  })

  workRaw.items.forEach(item => {
    const category = item.fields.serviceType.map(serviceType =>
      serviceType.toLowerCase()
    ) as ServiceType[]
    const coverUrl = images.find(
      image => image.id === item.fields.cover.sys.id
    )!.url
    const imagesUrl = item.fields.images.map(itemImages => {
      const image = images.find(image => image.id === itemImages.sys.id)
      if (image !== undefined) {
        return image.url
      }
      return ''
    })

    const imagesUrlFiltered = imagesUrl.filter(image => image !== '')

    works.push({
      title: item.fields.title,
      category,
      coverUrl: coverUrl,
      images: imagesUrlFiltered
    })
  })

  return works
}
