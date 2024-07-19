import { ReactNode } from 'react'

import { NewMealProvider } from '@/contexts/new-meal'

export default function NewMealLayout({ children }: { children: ReactNode }) {
  return (
    <NewMealProvider>
      <div className="">{children}</div>
    </NewMealProvider>
  )
}
