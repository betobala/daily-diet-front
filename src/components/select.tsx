'use client'
import React, { useEffect, useState } from 'react'
import { OnDietIcon } from './icons/on-diet-icon'
import { OffDietIcon } from './icons/off-diet-icon'

export interface SelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'yes' | 'no'
  isActive: boolean
}

export default function Select({ variant, isActive, ...props }: SelectProps) {
  const [borderColor, setBorderColor] = useState<string>('')

  useEffect(() => {
    if (variant === 'yes' && isActive) {
      setBorderColor('border border-green_dark bg-green_light')
    } else if (variant === 'no' && isActive) {
      setBorderColor('border border-red_dark bg-red_light')
    } else {
      setBorderColor('bg-gray-6')
    }
  }, [isActive, variant, borderColor])

  return (
    <button
      type="submit"
      className={`flex gap-1 items-center justify-center p-4 text-sm font-bold w-[100%] rounded-lg ${borderColor} active:outline-none active:ring-0 focus:outline-none focus:ring-0`}
      {...props}
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
    </button>
  )
}
