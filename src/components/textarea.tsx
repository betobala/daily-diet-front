import { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}
export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-sm font-bold">{label}</h1>
      <textarea
        className="border border-gray-5 focus:border-gray-3 focus:outline-none focus:ring-0 bg-gray-7 text-base p-3.5 rounded-md"
        rows={4}
        {...props}
      />
    </div>
  )
}
