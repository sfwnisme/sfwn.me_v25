'use client'

import { createContext, useContext} from "react"

// The dictionary has nested objects, so the value can be another object or a string.
// `any` is a simple way to allow for this structure.
export type Dictionary = Record<string, any>;

const DictionaryContext = createContext<Dictionary | null>(null)

export function DictionaryProvider({
  dictionary,
  children,
}:{
  dictionary: Dictionary,
  children: React.ReactNode
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  const context = useContext(DictionaryContext)
  if (context === null) {
    // This error is helpful for debugging.
    // It means you're trying to use the context outside of its provider.
    throw new Error("useDictionary must be used within a DictionaryProvider")
  }
  return context
}
