'use client'
import { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import DietOptionSelect from './diet-option-select'
import { Input } from './input'
import { TextArea } from './textarea'
import { useEditMeal } from '@/contexts/edit-meal'
import { useRouter } from 'next/navigation'
import { api } from '@/data/api'
import { Meal } from '@/data/types/meal'
import { separateDateAndHourString } from '@/utils/separate-date-hour-function'

interface EditMealFormProps extends FormHTMLAttributes<HTMLFormElement> {
  data: Meal
}

function convertToISO(data: string, hora: string): string {
  // Separando a data em dia, mês e ano
  const partesData = data.split('.')
  const dia = partesData[0]
  const mes = partesData[1]
  const ano = partesData[2]

  // Formando a string da data no formato ISO: "YYYY-MM-DD"
  const dataISO = `${ano}-${mes}-${dia}`

  // Formando a string completa no formato desejado: "YYYY-MM-DD HH:mm:ss"
  const dataHoraISO = `${dataISO} ${hora}:00`

  return dataHoraISO
}

export function EditMealForm({ data, ...props }: EditMealFormProps) {
  const [name, setName] = useState<string>(data.name)
  const [description, setDescription] = useState<string>(data.description)
  const [date, setDate] = useState<string>()
  const [time, setTime] = useState<string>()

  const { isOnDiet, setIsOnDietEditForm } = useEditMeal()

  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const dateTime = convertToISO(date, time)

    console.log(`/meals/${data.id}`)

    const response = await api(`/meals/${data.id}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({
        name,
        description,
        mealTime: dateTime,
        isDiet: Boolean(isOnDiet),
      }),
    })

    if (response.status === 200) {
      router.push(`/`)
    }
  }

  useEffect(() => {
    const initialDate = separateDateAndHourString(data.meal_time).date
    const initialTime = separateDateAndHourString(data.meal_time).hour
    setDate(initialDate)
    setTime(initialTime)

    function updateIsOnDiet() {
      setIsOnDietEditForm(data.is_diet)
    }
    updateIsOnDiet()
  }, [])

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

      <DietOptionSelect
        variant="edit"
        activeButton={Boolean(data.is_diet) === true ? 'yes' : 'no'}
      />
    </form>
  )
}
