import React from 'react'

interface SiteList {
  id: number
  title: string
  da: number
  url: string
  contact: string
}

interface SiteContextType {
  siteList: SiteList[]
  setSiteList: React.Dispatch<React.SetStateAction<SiteList[]>>
}

export const SiteContext = React.createContext<SiteContextType>({
  siteList: [],
  setSiteList: () => {},
})