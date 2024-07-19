import React, { ReactNode } from 'react'
import { EditMealProvider } from './edit-meal'
import { NewMealProvider } from './new-meal'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <EditMealProvider>
      <NewMealProvider>{children}</NewMealProvider>
    </EditMealProvider>
  )
}

export default AppProvider
