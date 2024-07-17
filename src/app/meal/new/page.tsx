import React from 'react'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/input'
import { TextArea } from '@/components/textarea'
import Select from '@/components/select'

export default function CreateMeal() {
  return (
    <div className="bg-gray-5">
      <div className="relative flex items-center justify-center bg-gray-5 p-6">
        <ArrowLeft size={24} color="black" className="absolute left-[24px]" />
        <h1 className="text-lg text-center font-bold">Nova refeição</h1>
      </div>
      <form className="bg-gray-7 p-6 pt-10 rounded-t-3xl flex flex-col gap-4">
        <div className="bg-gray-7 flex flex-col gap-2">
          <Input label="Nome" variant="text" />
          <TextArea label="Descrição" />

          <div className="flex gap-4 items-center justify-">
            <Input label="Data" variant="date" />
            <Input label="Hora" variant="time" />
          </div>
        </div>

        <div>
          <h1 className="text-sm font-bold">Está dentro da dieta?</h1>
          <div>
            <Select variant="yes" />
            <Select variant="no" />
          </div>
        </div>
      </form>
    </div>
  )
}
