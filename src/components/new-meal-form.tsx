'use client'
import { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import DietOptionSelect from './diet-option-select'
import { Input } from './input'
import { TextArea } from './textarea'
import { useNewMeal } from '@/contexts/new-meal'
import { useRouter } from 'next/navigation'
import { api } from '@/data/api'

interface NewMealFormProps extends FormHTMLAttributes<HTMLFormElement> {}

function convertToISO(data: string, hora: string): string {
  // Separando a data em dia, mês e ano
  const partesData = data.split('/')
  const dia = partesData[0]
  const mes = partesData[1]
  const ano = partesData[2]

  // Formando a string da data no formato ISO: "YYYY-MM-DD"
  const dataISO = `${ano}-${mes}-${dia}`

  // Formando a string completa no formato desejado: "YYYY-MM-DD HH:mm:ss"
  const dataHoraISO = `${dataISO} ${hora}:00`

  return dataHoraISO
}

export function NewMealForm({ ...props }: NewMealFormProps) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')

  const { isOnDiet } = useNewMeal()

  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const dateTime = convertToISO(date, time)

    const response = await api('/meals', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name,
        description,
        mealTime: dateTime,
        isDiet: isOnDiet,
      }),
    })

    if (response.status === 201) {
      if (isOnDiet) {
        router.push('/meal/new/on-diet-success')
      } else {
        router.push('/meal/new/off-diet-success')
      }
    }
  }

  useEffect(() => {
    console.log(name, description, date, time, isOnDiet)
  }, [name, description, date, time, isOnDiet])
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-7 rounded-t-3xl flex flex-col gap-4"
      {...props}
    >
      <div className="bg-gray-7 flex flex-col gap-2">
        <Input
          label="Nome"
          variant="text"
          value={name ?? ''}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextArea
          label="Descrição"
          value={description ?? ''}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className="flex gap-4 items-center justify-">
          <Input
            label="Data"
            variant="date"
            value={date ?? ''}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            label="Hora"
            variant="time"
            value={time ?? ''}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
      </div>

      <DietOptionSelect variant="new" />
    </form>
  )
}
