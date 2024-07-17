import React from 'react'
import { LogoIcon } from './icons/logo'
import Image from 'next/image'

export function Header() {
  return (
    <div className="flex items center justify-between">
      <div className="w-[82px] h-[37px]">
        <LogoIcon />
      </div>
      <Image
        src={'/perfil-image.png'}
        className="h-[40px] w-[40px] rounded-full border-2 border-gray-1"
        width={400}
        height={400}
        quality={100}
        alt=""
      />
    </div>
  )
}
