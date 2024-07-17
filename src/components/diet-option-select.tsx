'use client'
import { FormEvent, useEffect, useState } from 'react'
import Select from './select'

interface DietOptionSelectProps {
  label: string
}

export default function DietOptionSelect({ label }: DietOptionSelectProps) {
  const [isButtonYesActived, setIsButtonYesActived] = useState<boolean>(false)
  const [isButtonNoActived, setIsButtonNoActived] = useState<boolean>(false)

  function handleYesButton(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isButtonYesActived) {
      setIsButtonNoActived(false)
      setIsButtonYesActived(true)
    }
  }
  function handleNoButton(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isButtonNoActived) {
      setIsButtonYesActived(false)
      setIsButtonNoActived(true)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-bold text-left">{label}</h1>
      <div className="flex items-center justify-center gap-4">
        <Select
          variant="yes"
          isActive={isButtonYesActived}
          onClick={handleYesButton}
        />
        <Select
          variant="no"
          isActive={isButtonNoActived}
          onClick={handleNoButton}
        />
      </div>
    </div>
  )
}
