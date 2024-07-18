'use client'
import { Button } from '@/components/button'
import { LogoIcon } from '@/components/icons/logo'
import { Input } from '@/components/input'
import { FormEvent, MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/data/api'
import { setCookie } from 'cookies-next'
import axios from 'axios'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string>()
  const router = useRouter()

  function handleTpRegisterPageButton(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    router.push('/register')
  }

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoginError('')

    axios
      .get('localhost:3333/api/meals', { withCredentials: true })
      .then((response) => {
        console.log('Authenticated successfully:', response.data)
      })
      .catch((error) => {
        console.error('Authentication failed:', error)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4 p-6 mt-[-100px]">
      <div className="w-[200px]">
        <LogoIcon />
      </div>

      <form onSubmit={handleSignIn} className="flex flex-col gap-3 w-[100%]">
        <Input
          label="E-mail"
          variant="text"
          name="email"
          defaultValue={email ?? ''}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Senha"
          variant="password"
          name="password"
          value={password ?? ''}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {loginError && (
          <h1 className="text-center font-bold text-red_dark">{loginError}</h1>
        )}

        <Button text="Entrar" variant="default" />
        <Button
          text="Cadastrar"
          variant="white"
          onClick={handleTpRegisterPageButton}
        />
      </form>
    </div>
  )
}
