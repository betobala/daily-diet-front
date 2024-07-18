'use client'
import { useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './button'

function Modal() {
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const pathname = usePathname()

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full p-5 bg-gray-1 bg-opacity-30 z-[50] overflow-auto flex justify-center items-center">
          <div className="bg-gray-7 m-auto p-7 rounded-lg">
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-1 font-bold text-center">
                Deseja realmente excluir o registro da refeição?
              </p>
              <br />
              <div className="flex gap-2 items-center justify-center">
                <Link href={pathname} className="w-[100px]">
                  <Button text="Cancelar" variant="white" width="180" />
                </Link>
                <Button text="Sim, excluir" variant="default" width="150" />
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
