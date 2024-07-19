'use client'
import Link from 'next/link'
import { Button } from '@/components/button'
import { OnDietIcon } from '@/components/icons/on-diet-icon'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Modal from '@/components/modal'
import { Meal } from '@/data/types/meal'
import { api } from '@/data/api'
import { separateDateAndHourString } from '@/utils/separate-date-hour-function'
import { useEffect, useState } from 'react'
import { OffDietIcon } from '@/components/icons/off-diet-icon'

interface MealViewProps {
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

export default function MealView({ params }: MealViewProps) {
  const [meal, setMeal] = useState<Meal>()

  useEffect(() => {
    async function handleSetMeal() {
      const { meal } = await getMeal(params.id)
      setMeal(meal)
    }

    handleSetMeal()
  }, [])
  return (
    <div
      className={` ${meal?.is_diet ? 'bg-green_light' : 'bg-red_light'} flex flex-col`}
    >
      <div
        className={`relative flex items-center justify-center p-6 z-[1] ${meal?.is_diet ? 'bg-green_light' : 'bg-red_light'}`}
      >
        <Link href={'/'}>
          <ArrowLeft
            size={24}
            color="black"
            className="absolute left-[24px] top-[30px]"
          />
        </Link>
        <h1 className="text-lg text-center font-bold">Refeição</h1>
      </div>

      <div className="flex flex-col justify-between h-dvh gap-8 p-6 bg-gray-7 rounded-3xl z-[1]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-1 text-lg">{meal?.name} </h1>
            <p>{meal?.description}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-2 font-bold">Data e hora</p>
            {meal && (
              <p>{`${separateDateAndHourString(meal?.meal_time).date} às ${separateDateAndHourString(meal?.meal_time).hour}`}</p>
            )}
          </div>

          <div className="flex items-baseline justify-center gap-1 rounded-full bg-gray-6 px-4 py-2 max-w-[160px]">
            <div className="w-[8px] h-[8px]">
              {meal?.is_diet ? (
                <OnDietIcon variant="dark" />
              ) : (
                <OffDietIcon variant="dark" />
              )}
            </div>
            <span>{meal?.is_diet ? 'dentro da dieta' : 'fora da dieta'}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-[90px]">
          <Link href={`/meal/edit/${meal?.id}`}>
            <Button text="Editar refeição" variant="edit" />
          </Link>
          <Link href="?modal=true">
            <Button text="Excluir refeição" variant="delete" />
          </Link>
        </div>
      </div>
      <Modal mealId={params.id} />
    </div>
  )
}
