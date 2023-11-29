'use client'

import { useWorksContext } from '@/contexts/work.context'
import { WorkThumb } from './WorkThumb'
import { useEffect, useState } from 'react'
import { WorksGallerySkeleton } from './WorksGallerySkeleton'
import { Text } from './Text'

interface Props {
  className?: string
  limit?: number
}

export function WorksGallery({ className, limit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { allWorks, displayingWorks, setDisplayingWorks } = useWorksContext()

  useEffect(() => {
    if (allWorks.length === 0) {
      return
    }

    if (limit) {
      setDisplayingWorks(allWorks.slice(0, limit))
      setIsLoading(false)
      return
    }

    setDisplayingWorks(allWorks)
    setIsLoading(false)
  }, [allWorks])

  return (
    <div
      className={`w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative ${className}`}
    >
      {isLoading ? (
        <WorksGallerySkeleton />
      ) : (
        <>
          {displayingWorks.length === 0 ? (
            <div className="w-full absolute flex justify-center">
              <Text className="text-center">Nenhum trabalho encontrado</Text>
            </div>
          ) : (
            <>
              {displayingWorks.map((work, index) => (
                <WorkThumb
                  key={index}
                  src={work.coverUrl}
                  title={work.title}
                  category={work.category}
                  images={work.images}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}
