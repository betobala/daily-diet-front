'use client'
import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { OffDietIcon } from '@/components/icons/off-diet-icon'
import { OnDietIcon } from '@/components/icons/on-diet-icon'
import { api } from '@/data/api'
import { Meal } from '@/data/types/meal'
import { Summary } from '@/data/types/summary'
import { separateDateAndHourString } from '@/utils/separate-date-hour-function'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

function orderDates(arrayDatas: string[]): string[] {
  // Função de comparação para ordenar decrescentemente pelo ano
  function compararPorAnoDecrescente(a: string, b: string): number {
    // Extrai o ano de cada string de data
    const anoA = parseInt(a.slice(6), 10) // Extrai os últimos dois dígitos do ano (YY)
    const anoB = parseInt(b.slice(6), 10)

    // Compara os anos de forma decrescente
    return anoB - anoA
  }

  // Ordena o array utilizando a função de comparação personalizada
  arrayDatas.sort(compararPorAnoDecrescente)

  return arrayDatas
}

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [mealDates, setMealDates] = useState<string[]>()
  const [summary, setSummary] = useState<Summary>({
    mealsQuantity: 0,
    mealsOnDietQuantity: 0,
    mealsOffDietQuantity: 0,
    bestOnDietSequence: 0,
    percentageMealsOnDiet: 10,
  })

  const router = useRouter()

  function getAllMealDates(array: Meal[]) {
    const datesSet: Set<string> = new Set()
    // Utilizamos um Set para garantir datas únicas

    array.forEach((obj) => {
      const { date, hour } = separateDateAndHourString(obj.meal_time)

      datesSet.add(date) // Adiciona a data ao Set
    })

    const orderedDates = orderDates(Array.from(datesSet))

    setMealDates(orderedDates) // Retorna um array com as datas únicas
  }

  useEffect(() => {
    async function getSummary() {
      const response = await api('/meals/summary', {
        method: 'GET',
        credentials: 'include',
      })
      if (response.status === 200) {
        const summary = await response.json()

        setSummary(summary)
      } else {
        deleteCookie('sessionId')
        router.refresh()
      }
    }

    async function getAllMeals() {
      const response = await api('/meals', {
        method: 'GET',
        credentials: 'include',
      })

      if (response.status === 200) {
        const { meals } = await response.json()

        setMeals(meals)
        getAllMealDates(meals)
      } else {
        deleteCookie('sessionId')
        router.refresh()
      }
    }
    getAllMeals()
    getSummary()
  }, [])

  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />
      <div
        className={`relative flex flex-col items-center gap-1 ${summary?.percentageMealsOnDiet > 50 ? 'bg-green_light' : 'bg-red_light'} py-5 px-4 rounded-md`}
      >
        <h1 className="text-3xl text-gray-1 text-center font-bold">{`${summary ? summary.percentageMealsOnDiet.toFixed(2).toString().replace('.', ',') : 0}%`}</h1>
        <p className="text-sm text-center">das refeições dentro da dieta</p>
        <Link href="/summary">
          <ArrowUpRight
            size={24}
            color={`${summary?.percentageMealsOnDiet > 50 ? '#639339' : '#BF3B44'}`}
            className="absolute right-2 top-2"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-base text-left">Refeições</h1>

        <Link href="/meal/new">
          <Button text="Nova refeição" variant="add" />
        </Link>
      </div>

      {mealDates
        ?.sort()
        .reverse()
        .map((date, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-gray-1 text-lg text-left font-bold">
                {date}
              </h1>

              <div className="flex flex-col gap-3">
                {meals
                  .filter(
                    (meal) =>
                      separateDateAndHourString(meal.meal_time).date === date,
                  )
                  ?.reverse()
                  .map((meal) => {
                    return (
                      <Link href={`/meal/${meal.id}`} key={meal.id}>
                        <div className="flex items-center gap-2 border border-gray-4 rounded-lg px-4 py-3 pl-3">
                          <span className="text-xs leading-[15px] text-gray-1 font-bold">
                            {separateDateAndHourString(meal.meal_time).hour}
                          </span>
                          <div className="w-px h-4 bg-gray-4"></div>
                          <div className="flex justify-between w-[100%]">
                            <h1 className="truncate max-w-[220px] text-base text-gray-2 leading-[21px]">
                              {meal.name}
                            </h1>
                            {meal.is_diet ? (
                              <div className="w-[15px]">
                                <OnDietIcon variant="light" />
                              </div>
                            ) : (
                              <div className="w-[15px]">
                                <OffDietIcon variant="light" />
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </div>
          )
        })}
    </div>
  )
}
