'use client'
import { FormEvent } from 'react'
import DietOptionSelect from './diet-option-select'
import { Input } from './input'
import { TextArea } from './textarea'

export function NewMealForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-7 rounded-t-3xl flex flex-col gap-4"
    >
      <div className="bg-gray-7 flex flex-col gap-2">
        <Input label="Nome" variant="text" />
        <TextArea label="Descrição" />

        <div className="flex gap-4 items-center justify-">
          <Input label="Data" variant="date" />
          <Input label="Hora" variant="time" />
        </div>
      </div>

      <DietOptionSelect label="Está dentro da dieta?" />
    </form>
  )
}
