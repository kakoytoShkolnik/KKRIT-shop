'use client'
import { createDomain, createEffect } from 'effector'
import toast from 'react-hot-toast'
import { onAuthSuccess } from '@/lib/utils/auth'
import { ISignUpFx } from '@/types/authPopup'
import api from '@/api/apiInstance'

export const auth = createDomain()

export const openAuthPopup = auth.createEvent()
export const closeAuthPopup = auth.createEvent()
export const handleSignUp = auth.createEvent<ISignUpFx>()
export const handleSignIn = auth.createEvent<ISignUpFx>()
export const setIsAuth = auth.createEvent<boolean>()

export const singUpFx = createEffect(
  async ({ name, password, email }: ISignUpFx) => {
      const { data } = await api.post('/api/users/signup', {
          name,
          password,
          email,
      })

      if (data.warningMessage) {
          toast.error(data.warningMessage)
          return
      }

      onAuthSuccess('Регистрация прошла успешно!', data)

      return data
  }
)

export const singInFx = createEffect(
  async ({ email, password,  }: ISignUpFx) => {

    const { data } = await api.post('/api/users/login', { email, password })

    if (data.warningMessage) {
      toast.error(data.warningMessage)
      return
    }

    onAuthSuccess('Вход выполнен!', data)

    return data
  }
)

export const refreshTokenFx = createEffect(async ({ jwt }: { jwt: string }) => {
  const { data } = await api.post('/api/users/refresh', { jwt })

  localStorage.setItem('auth', JSON.stringify(data))

  return data
})