'use client'
import { Button } from '@/components/button'
import { LogoIcon } from '@/components/icons/logo'
import { Input } from '@/components/input'
import { api } from '@/data/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

interface CreateUserBody {
  name: string
  email: string
  password: string
}

export default function Register() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [body, setBody] = useState<CreateUserBody>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    const response = await api('/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    if (response.status === 201) {
      router.push('/')
      setIsLoading(false)
    }
  }

  useEffect(() => {}, [name, email, password, body])

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4 p-6 mt-[-100px]">
      <div className="w-[200px]">
        <LogoIcon />
        <h1 className="text-1xl text-gray-1 font-bold text-center">Cadastro</h1>
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-3 w-[100%]">
        <Input
          label="Nome"
          variant="text"
          value={name ?? ''}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="E-mail"
          variant="text"
          value={email ?? ''}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Senha"
          variant="password"
          value={password ?? ''}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex flex-col gap-4">
          <Button text="Cadastrar" variant="default" disabled={isLoading} />
          <Link href={'/'}>
            <Button text="Voltar" variant="white" />
          </Link>
        </div>
      </form>
    </div>
  )
}
