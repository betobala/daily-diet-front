'use client'
import Link from 'next/link'
import { Button } from '@/components/button'
import { OnDietIcon } from '@/components/icons/on-diet-icon'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import Modal from '@/components/modal'

export default function MealView() {
  return (
    <div className=" bg-green_light flex flex-col">
      <div className="relative flex items-center justify-center bg-green_light p-6 z-[1]">
        <Link href={'/'}>
          <ArrowLeft
            size={24}
            color="black"
            className="absolute left-[24px] top-[30px]"
          />
        </Link>
        <h1 className="text-lg text-center font-bold">Refeição</h1>
      </div>

      <div className="flex flex-col justify-between h-dvh gap-4 p-6 bg-gray-7 rounded-3xl z-[1]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-gray-1 text-lg">Sanduíche</h1>
            <p>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-1 font-bold">Data e hora</p>
            <p>12/08/2022 às 16:00</p>
          </div>

          <div className="flex items-baseline justify-center gap-1 rounded-full bg-gray-5 px-4 py-2 max-w-[160px]">
            <div className="w-[8px] h-[8px]">
              <OnDietIcon variant="dark" />
            </div>
            <span>dentro da dieta</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-[90px]">
          <Button text="Editar refeição" variant="edit" />
          <Link href="?modal=true">
            <Button text="Excluir refeição" variant="delete" />
          </Link>
        </div>
      </div>
      <Modal />
    </div>
  )
}
