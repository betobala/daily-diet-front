'use client'
import { MouseEvent, useState } from 'react'
import Select from './select'
import { useNewMeal } from '@/contexts/new-meal'
import { useEditMeal } from '@/contexts/edit-meal'

interface DietOptionSelectProps {
  activeButton?: 'yes' | 'no'
  variant: 'edit' | 'new'
}

export default function DietOptionSelect({
  activeButton,
  variant,
}: DietOptionSelectProps) {
  const [isButtonYesActived, setIsButtonYesActived] = useState<boolean>(
    activeButton === 'yes',
  )
  const [isButtonNoActived, setIsButtonNoActived] = useState<boolean>(
    activeButton === 'no',
  )

  const { setIsOnDietNewForm } = useNewMeal()
  const { setIsOnDietEditForm } = useEditMeal()

  function handleYesButton(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (!isButtonYesActived) {
      setIsButtonNoActived(false)
      setIsButtonYesActived(true)
      if (variant === 'new') {
        setIsOnDietNewForm(true)
      } else {
        setIsOnDietEditForm(true)
      }
    }
  }
  function handleNoButton(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (!isButtonNoActived) {
      setIsButtonYesActived(false)
      setIsButtonNoActived(true)
      if (variant === 'new') {
        setIsOnDietNewForm(false)
      } else {
        setIsOnDietEditForm(false)
      }
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm font-bold text-left">Está dentro da dieta?</h1>
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
