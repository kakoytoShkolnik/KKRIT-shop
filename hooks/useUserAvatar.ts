import { useUnit } from 'effector-react'
import { useState, useEffect } from 'react'
import { $user } from '@/context/user'

export const useUserAvatar = () => {
  const user = useUnit($user)
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user.image) {
      setSrc(user.image)
      return
    }
 })

  return { src }
}