'use client'

import { Contact, Fields } from '@/types/contact'
import { createContext, ReactNode, useContext } from 'react'

interface ContextProps {
  contactInfo: Fields
}

export const ContactContext = createContext({} as ContextProps)

interface ContactProviderProps {
  children: ReactNode
  contact: Contact
}

export async function ContactProvider({
  children,
  contact
}: ContactProviderProps) {
  const contactInfo = contact.items[0].fields

  return (
    <ContactContext.Provider
      value={{
        contactInfo
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)
