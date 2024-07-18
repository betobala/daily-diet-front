import React, { ButtonHTMLAttributes } from 'react'
import { PencilSimpleLine, Trash, Plus } from '@phosphor-icons/react/dist/ssr'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'default' | 'white' | 'edit' | 'delete' | 'add'
  width?: string
}
export function Button({ text, variant, width, ...props }: ButtonProps) {
  let bgColor = ''
  let textColor = ''

  if (variant === 'white' || variant === 'delete') {
    bgColor = 'bg-gray-7'
    textColor = 'text-gray-2'
  } else {
    bgColor = 'bg-gray-2'
    textColor = 'text-white'
  }

  const buttonWidth = width ? `w-[${width}px]` : 'w-[100%]'

  return (
    <button
      className={` ${bgColor} ${buttonWidth} border border-gray-2 px-6 py-4 flex justify-center items-center gap-3 rounded-md disabled:bg-red_dark`}
      {...props}
    >
      {variant === 'add' && <Plus size={18} color="white" />}
      {variant === 'edit' && <PencilSimpleLine size={18} color="white" />}
      {variant === 'delete' && <Trash size={18} color="black" />}
      <span
        className={`text-sm leading-[18px] font-semibold ${textColor} text-center `}
      >
        {text}
      </span>
    </button>
  )
}
