import { NewMealForm } from '@/components/new-meal-form'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export default function CreateMeal() {
  return (
    <div className="bg-gray-5">
      <div className="relative flex items-center justify-center bg-gray-5 p-6">
        <ArrowLeft size={24} color="black" className="absolute left-[24px]" />
        <h1 className="text-lg text-center font-bold">Nova refeição</h1>
      </div>
      <NewMealForm />
    </div>
  )
}
