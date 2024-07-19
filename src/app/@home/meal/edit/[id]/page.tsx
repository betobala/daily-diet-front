'use client'
import { Button } from '@/components/button'
import { EditMealForm } from '@/components/edit-meal-form'
import { api } from '@/data/api'
import { Meal } from '@/data/types/meal'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface MealEditProps {
  params: {
    id: string
  }
}

async function getMeal(id: string): Promise<Meal> {
  const response = await api(`/meals/${id}`, {
    method: 'GET',
    credentials: 'include',
  })

  const meal = await response.json()

  return meal
}

export default function EditMeal({ params }: MealEditProps) {
  const [meal, setMeal] = useState<Meal>()

  useEffect(() => {
    async function handleSetMeal() {
      const meal = await getMeal(params.id)
      setMeal(meal)
    }

    handleSetMeal()
  }, [params.id])

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
        {meal && <EditMealForm data={meal} id="edit-meal-form" />}

        <div className="mb-[90px]">
          <Button
            text="Salvar alterações"
            variant="default"
            type="submit"
            form="edit-meal-form"
          />
        </div>
      </div>
    </div>
  )
}
