import React from 'react'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export default function HomeSummary() {
  return (
    <div className="bg-green_light">
      <div className="flex flex-col gap-6 p-6 pb-3 bg-green_light">
        <div>
          <ArrowLeft size={24} color="#639339" className="align-left" />

          <div className="flex flex-col items-center gap-1 bg-green_light py-5 px-4 rounded-md">
            <h1 className="text-3xl text-gray-1 text-center font-bold">
              90,86%
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
            22
          </h1>
          <span className="text-sm text-center">
            melhor sequência de pratos dentro da dieta
          </span>
        </div>

        <div className="bg-gray-6 p-4 rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
            109
          </h1>
          <span className="text-sm text-center">refeições registradas</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-green_light p-4 rounded-lg flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
              99
            </h1>
            <span className="text-sm text-center">
              refeições dentro da dieta
            </span>
          </div>
          <div className="bg-red_light p-4 rounded-lg flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center text-gray-1 leading-[130%]">
              10
            </h1>
            <span className="text-sm text-center">refeições fora da dieta</span>
          </div>
        </div>
      </div>
    </div>
  )
}
