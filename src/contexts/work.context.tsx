'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { formatWorkRaw } from '@/helpers/workHelpers'
import { ServiceType } from '@/types/services'
import { WorkRaw, Work } from '@/types/work'

interface WorkProps {
  allWorks: Work[]
  displayingWorks: Work[]
  addFilter: (filter: ServiceType) => void
  removeFilter: (filter: ServiceType) => void
  filters: ServiceType[]
  setDisplayingWorks: Dispatch<SetStateAction<Work[]>>
}

export const WorkContext = createContext({} as WorkProps)

interface WorkProviderProps {
  children: React.ReactNode
  workRaw: WorkRaw
}

export function WorkProvider({ children, workRaw }: WorkProviderProps) {
  const [allWorks, setAllWorks] = useState<Work[]>([] as Work[])
  const [displayingWorks, setDisplayingWorks] = useState<Work[]>([] as Work[])
  const [filters, setFilters] = useState<ServiceType[]>([] as ServiceType[])
  const setWork = new Set()

  useEffect(() => {
    setAllWorks(formatWorkRaw(workRaw))
    setDisplayingWorks(formatWorkRaw(workRaw))
  }, [workRaw])

  useEffect(() => {
    if (filters.length > 0) {
      const works = [] as Work[]

      filters.forEach(filter => {
        works.push(...allWorks.filter(work => work.category.includes(filter)))
      })

      const lastFilter = works.filter(work => {
        const duplicatedWork = setWork.has(work.title)
        setWork.add(work.title)
        return !duplicatedWork
      })

      setDisplayingWorks(lastFilter)
      return
    }
    if (allWorks.length > 0) {
      setDisplayingWorks(allWorks)
    }
  }, [filters])

  function addFilter(filter: ServiceType) {
    setFilters([...filters, filter])
  }

  function removeFilter(filter: ServiceType) {
    setFilters(filters.filter(f => f !== filter))
  }

  return (
    <WorkContext.Provider
      value={{
        allWorks,
        displayingWorks,
        addFilter,
        removeFilter,
        filters,
        setDisplayingWorks
      }}
    >
      {children}
    </WorkContext.Provider>
  )
}

export const useWorksContext = () => useContext(WorkContext)
