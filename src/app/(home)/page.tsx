import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { OffDietIcon } from '@/components/icons/off-diet-icon'
import { OnDietIcon } from '@/components/icons/on-diet-icon'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />

      <div className="relative flex flex-col items-center gap-1 bg-green_light py-5 px-4 rounded-md">
        <h1 className="text-3xl text-gray-1 text-center font-bold">90,86%</h1>
        <p className="text-sm text-center">das refeições dentro da dieta</p>
        <ArrowUpRight
          size={24}
          color="#639339"
          className="absolute right-2 top-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-base text-left">Refeições</h1>
        <Button text="Nova refeição" variant="add" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-gray-1 text-lg text-left font-bold">12.08.22</h1>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 border border-gray-4 rounded-lg px-4 py-3 pl-3">
            <span className="text-xs leading-[15px] text-gray-1 font-bold">
              20:00
            </span>
            <div className="w-px h-4 bg-gray-4"></div>
            <div className="flex justify-between w-[100%]">
              <h1 className="truncate max-w-[220px] text-base text-gray-2 leading-[21px]">
                X-tudoooooooooooooooooooooooooooooooooooooooooooo
              </h1>
              <div className="w-[15px]">
                <OffDietIcon variant="light" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 border border-gray-4 rounded-lg px-4 py-3 pl-3">
            <span className="text-xs leading-[15px] text-gray-1 font-bold">
              20:00
            </span>
            <div className="w-px h-4 bg-gray-4"></div>
            <div className="flex justify-between w-[100%]">
              <h1 className="truncate max-w-[220px] text-base text-gray-2 leading-[21px]">
                X-Salada
              </h1>
              <div className="w-[15px]">
                <OnDietIcon variant='light'/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 border border-gray-4 rounded-lg px-4 py-3 pl-3">
            <span className="text-xs leading-[15px] text-gray-1 font-bold">
              20:00
            </span>
            <div className="w-px h-4 bg-gray-4"></div>
            <div className="flex justify-between w-[100%]">
              <h1 className="truncate max-w-[220px] text-base text-gray-2 leading-[21px]">
                X-tudoooooooooooooooooooooooooooooooooooooooooooo
              </h1>
              <div className="w-[15px]">
                <OffDietIcon variant="light" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 border border-gray-4 rounded-lg px-4 py-3 pl-3">
            <span className="text-xs leading-[15px] text-gray-1 font-bold">
              20:00
            </span>
            <div className="w-px h-4 bg-gray-4"></div>
            <div className="flex justify-between w-[100%]">
              <h1 className="truncate max-w-[220px] text-base text-gray-2 leading-[21px]">
                X-tudoooooooooooooooooooooooooooooooooooooooooooo
              </h1>
              <div className="w-[15px]">
                <OnDietIcon variant='light'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
