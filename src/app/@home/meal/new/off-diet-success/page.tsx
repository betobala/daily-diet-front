import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function OffDietSuccess() {
  return (
    <div className="px-6 flex flex-col items-center justify-center min-h-screen gap-4 pb-8">
      <h1 className="text-2xl text-red_dark text-center font-bold">
        Que pena!
      </h1>

      <p className="text-gray-1 text-base text-center">
        Você <b>saiu da dieta</b> dessa vez, mas continue se esforçando e não
        desista!
      </p>

      <Image
        quality={100}
        alt=""
        src={'/off-diet-success.png'}
        width={224}
        height={288}
      />

      <Link href={'/'}>
        <Button text="Ir para a página inicial" variant="default" />
      </Link>
    </div>
  )
}
