'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface EditMealContextType {
  isOnDiet: boolean
  setIsOnDietEditForm: (inDiet: boolean) => void
}

const EditMealContext = createContext({} as EditMealContextType)

export function EditMealProvider({ children }: { children: ReactNode }) {
  const [isOnDiet, setIsOnDiet] = useState<boolean>()

  function setIsOnDietEditForm(isDiet: boolean) {
    setIsOnDiet(isDiet)
  }

  return (
    <EditMealContext.Provider value={{ isOnDiet, setIsOnDietEditForm }}>
      {children}
    </EditMealContext.Provider>
  )
}

export const useEditMeal = () => useContext(EditMealContext)
