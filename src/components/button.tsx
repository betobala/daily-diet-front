import React from 'react'
import { PencilSimpleLine, Trash, Plus } from '@phosphor-icons/react/dist/ssr'

export interface ButtonProps {
  text: string
  variant: 'default' | 'edit' | 'delete' | 'add'
}
export function Button({ text, variant }: ButtonProps) {
  return (
    <div className="bg-gray-2 px-6 py-4 flex justify-center items-center gap-3 rounded-md">
      {variant === 'add' && <Plus size={18} color="white" />}
      {variant === 'edit' && <PencilSimpleLine size={18} color="white" />}
      {variant === 'delete' && <Trash size={18} color="white" />}
      <span className="text-sm leading-[18px] font-semibold text-white text-center">
        {text}
      </span>
    </div>
  )
}
