import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function OnDietSuccess() {
  return (
    <div className="px-6 flex flex-col items-center justify-center min-h-screen gap-4 pb-8">
      <h1 className="text-2xl text-green_dark text-center font-bold">
        Continue assim!
      </h1>

      <p className="text-gray-1 text-base text-center">
        Você continua <b>dentro da dieta.</b> Muito bem!
      </p>

      <Image
        quality={100}
        alt=""
        src={'/on-diet-success.png'}
        width={224}
        height={288}
      />

      <Link href={'/'}>
        <Button text="Ir para a página inicial" variant="default" />
      </Link>
    </div>
  )
}
