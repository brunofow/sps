import { ServiceType } from './services'

export interface WorkRaw {
  sys: WorkSys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

export interface Includes {
  Asset: Asset[]
}

export interface Asset {
  metadata: Metadata
  sys: AssetSys
  fields: AssetFields
}

export interface AssetFields {
  title: string
  file: File
  description?: string
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Metadata {
  tags: any[]
}

export interface AssetSys {
  space: Cover
  id: string
  type: string
  createdAt: Date
  updatedAt: Date
  environment: Cover
  revision: number
  locale: string
  contentType?: Cover
}

export interface Cover {
  sys: CoverSys
}

export interface CoverSys {
  id: string
  type: Type
  linkType: LinkType
}

export enum LinkType {
  Asset = 'Asset',
  ContentType = 'ContentType',
  Environment = 'Environment',
  Space = 'Space'
}

export enum Type {
  Link = 'Link'
}

export interface Item {
  metadata: Metadata
  sys: AssetSys
  fields: ItemFields
}

export interface ItemFields {
  title: string
  serviceType: ServiceType[]
  cover: Cover
  images: Cover[]
}

export interface WorkSys {
  type: string
}

interface Work {
  title: string
  category: ServiceType[]
  coverUrl: string
  images: string[]
}
