'use client'
import React from 'react'
import { PatternFormat } from 'react-number-format'

export interface InputProps {
  label: string
  variant: 'text' | 'date' | 'time'
}
export function Input({ label, variant }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-sm font-bold">{label}</h1>
      {variant === 'date' && (
        <PatternFormat
          className="border border-gray-5 focus:border-gray-3 focus:outline-none focus:ring-0 bg-gray-7 text-base p-3.5 rounded-md w-[100%]"
          placeholder="dd/mm/aaaa"
          format="%%/%%/%%%%"
          patternChar="%"
        />
      )}
      {variant === 'time' && (
        <PatternFormat
          className="border border-gray-5 focus:border-gray-3 focus:outline-none focus:ring-0 bg-gray-7 text-base p-3.5 rounded-md w-[100%]"
          placeholder="00:00:00"
          format="%%:%%:%%"
          patternChar="%"
        />
      )}
      {variant === 'text' && (
        <input
          type="text"
          className="border border-gray-5 focus:border-gray-3 focus:outline-none focus:ring-0 bg-gray-7 text-base p-3.5 rounded-md w-[100%]"
        />
      )}
    </div>
  )
}
