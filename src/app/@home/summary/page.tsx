'use client'
import React, { useEffect, useState } from 'react'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { api } from '@/data/api'
import { Summary } from '@/data/types/summary'

export default function HomeSummary() {
  const [summary, setSummary] = useState<Summary>({
    mealsQuantity: 0,
    mealsOnDietQuantity: 0,
    mealsOffDietQuantity: 0,
    bestOnDietSequence: 0,
    percentageMealsOnDiet: 0,
  })

  useEffect(() => {
    async function getSummary() {
      const response = await api('/meals/summary', {
        method: 'GET',
        credentials: 'include',
      })
      const summary = await response.json()

      setSummary(summary)
    }
    getSummary()
  }, [])

  return (
    <div
      className={`${summary?.percentageMealsOnDiet > 50 ? 'bg-green_light' : 'bg-red_light'}`}
    >
      <div
        className={`flex flex-col gap-6 p-6 pb-3 ${summary?.percentageMealsOnDiet > 50 ? 'bg-green_light' : 'bg-red_light'} `}
      >
        <div>
          <Link href="/">
            <ArrowLeft size={24} color={`${summary?.percentageMealsOnDiet > 50 ? '#639339' : '#BF3B44'}`} className="align-left" />
          </Link>

          <div
            className={`flex flex-col items-center gap-1 py-5 px-4 rounded-md ${summary?.percentageMealsOnDiet > 50 ? 'bg-green_light' : 'bg-red_light'}`}
          >
            <h1 className="text-3xl text-gray-1 text-center font-bold">
              {`${summary ? summary.percentageMealsOnDiet.toFixed(2) : 0}%`}
            </h1>
            <p className="text-xs text-center">das refeições dentro da dieta</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-7 rounded-t-3xl flex flex-col gap-3 p-6">
        <h1 className="text-sm font-bold text-gray-1 text-center">
          Estatísticas gerais
        </h1>
        <div className="bg-gray-6 p-4 rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
            {`${summary ? summary.bestOnDietSequence : 0}`}
          </h1>
          <span className="text-sm text-center">
            melhor sequência de pratos dentro da dieta
          </span>
        </div>

        <div className="bg-gray-6 p-4 rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
            {`${summary ? summary.mealsQuantity : 0}`}
          </h1>
          <span className="text-sm text-center">refeições registradas</span>
        </div>

        <div className="flex items-center justify-center gap-7 w-[100%]">
          <div className="bg-green_light p-4 rounded-lg flex flex-col items-center w-[46%] h-[100%]">
            <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
              {`${summary ? summary.mealsOnDietQuantity : 0}`}
            </h1>
            <span className="text-sm text-center">
              refeições dentro da dieta
            </span>
          </div>

          <div className="bg-red_light p-4 rounded-lg flex flex-col items-center w-[46%] h-[100%]">
            <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
              {`${summary ? summary.mealsOffDietQuantity : 0}`}
            </h1>
            <span className="text-sm text-center">refeições fora da dieta</span>
          </div>
        </div>
      </div>
    </div>
  )
}
