import { ReactNode } from 'react'

import { EditMealProvider } from '@/contexts/edit-meal'

export default function EditMealLayout({ children }: { children: ReactNode }) {
  return (
    <EditMealProvider>
      <div className="">{children}</div>
    </EditMealProvider>
  )
}
