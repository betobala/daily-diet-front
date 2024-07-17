import React from 'react'
import { OnDietIcon } from './icons/on-diet-icon'
import { OffDietIcon } from './icons/off-diet-icon'

export interface SelectProps {
  variant: 'yes' | 'no'
}
export default function Select({ variant }: SelectProps) {
  const activeBgColor =
    variant === 'yes'
      ? 'active:bg-green_light active:border-green-dark'
      : 'active:bg-red_light active:border-red-dark'
  return (
    <select
      className={`flex gap-1 items-center justify-center p-4 text-sm font-bold bg-gray-6 ${activeBgColor}`}
    >
      {variant === 'yes' && (
        <>
          <div className="w-[8px] h-[8px]">
            <OnDietIcon variant="dark" />
          </div>
          <span>Sim</span>
        </>
      )}
      {variant === 'no' && (
        <>
          <div className="w-[8px] h-[8px]">
            <OffDietIcon variant="dark" />
          </div>
          <span>Não</span>
        </>
      )}
    </select>
  )
}
