import { loginCheck } from '@/context/users';
import { useEffect, useState } from 'react';

export const useIsUserAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    if (!auth?.accessToken) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, []);

  return isAuth;
}

export const useTriggerLoginCheck = () => {
    useEffect(() => {
      if (typeof window === 'undefined') {
        return; // Если код выполняется на сервере, выходим
      }
  
      const auth = JSON.parse(localStorage.getItem('auth') as string);
  
      if (!auth?.accessToken) {
        return; // Если пользователь не авторизован, выходим
      }
  
      loginCheck({ jwt: auth.accessToken });
    }, []); // Пустой массив зависимостей, чтобы эффект выполнился один раз
}