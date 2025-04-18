import { onAuthSuccess } from "@/lib/utils/auth";
import { createEffect } from "effector";
import toast from "react-hot-toast";
import api from './apiInstance'
import { ISignUpFx } from "@/types/authPopup";
import { setIsAuth } from "@/context/auth";
import { handleJWTError } from "@/lib/utils/errors";

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

export const singInFx = createEffect(async ({ email, password }: ISignUpFx) => {
    const { data } = await api.post('/api/users/login', { email, password })

    if (data.warningMessage) {
        toast.error(data.warningMessage)
        return
    }

    onAuthSuccess('Вход выполнен!', data)
    return data
})

export const loginCheckFx = createEffect(async ({ jwt }: { jwt: string }) => {
    try{
        const { data } = await api.get('/api/users/login-check', {
            headers: { Authorization: `Bearer ${jwt}` },
        })

        if (data?.error) {
            handleJWTError(data.error.name, {
                repeatRequestMethodName: 'loginCheckFx'
            })
            return
        }

        setIsAuth(true)
        return data.user
    } catch (error) {
        toast.error((error as Error).message)
    }
})

export const refreshTokenFx = createEffect(async ({ jwt }: {jwt: string}) => {
    const { data } = await api.post('/api/users/refresh', { jwt })

    localStorage.setItem('auth', JSON.stringify(data))

    return data
})