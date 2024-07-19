'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface NewMealContextType {
  isOnDiet: boolean
  setIsOnDietNewForm: (inDiet: boolean) => void
}

const NewMealContext = createContext({} as NewMealContextType)

export function NewMealProvider({ children }: { children: ReactNode }) {
  const [isOnDiet, setIsOnDiet] = useState<boolean>(false)

  function setIsOnDietNewForm(isDiet: boolean) {
    setIsOnDiet(isDiet)
  }

  return (
    <NewMealContext.Provider value={{ isOnDiet, setIsOnDietNewForm }}>
      {children}
    </NewMealContext.Provider>
  )
}

export const useNewMeal = () => useContext(NewMealContext)
