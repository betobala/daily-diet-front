import { Button } from '@/components/button'
import { NewMealForm } from '@/components/new-meal-form'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function EditMeal() {
  return (
    <div className="bg-gray-5">
      <div className="relative flex items-center justify-center bg-gray-5 p-6">
        <Link href={'/'}>
          <ArrowLeft
            size={24}
            color="black"
            className="absolute left-[24px] top-[30px]"
          />
        </Link>
        <h1 className="text-lg text-center font-bold">Editar refeição</h1>
      </div>
      <div className="flex flex-col h-dvh justify-between p-6 bg-gray-7 rounded-3xl">
        <NewMealForm />

        <div className="mb-[90px]">
          <Button text="Salvar alterações" variant="default" />
        </div>
      </div>
    </div>
  )
}
