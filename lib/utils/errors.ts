/* eslint-disable indent */
import { loginCheckFx } from "@/api/auth"
import { addProductToCartFx, deleteCartItemFx, getCartItemFx } from "@/api/cart"
import { JWTError } from "@/constants/jwt"
import { addProductsFromLsToCartFx } from "@/context/cart"
import { IaddProductsFromLsToCartFx, IAddProductToCartFx, IDeleteCartItemsFx } from "@/types/cart"

export const handleJWTError = async (
    errorName: string,
    repeatRequestAfterRefreshData?: {
      repeatRequestMethodName: string
      payload?: unknown
    }
  ) => {
    if (errorName === JWTError.EXPIRED_JWT_TOKEN) {
        const auth = JSON.parse(localStorage.getItem('auth') as string)
        const newTokens = {accessToken: ''}

        if (repeatRequestAfterRefreshData) {
            const { repeatRequestMethodName, payload} = repeatRequestAfterRefreshData

            switch (repeatRequestMethodName) {
                case 'getCartItemsFx':
                    return getCartItemFx({
                        jwt: newTokens.accessToken,
                    })
                case 'addProductToCartFx':
                    return addProductToCartFx({
                        ...(payload as IAddProductToCartFx),
                        jwt: newTokens.accessToken,
                    })
                case 'addProductsFromLsToCartFx':
                    return addProductsFromLsToCartFx({
                        ...(payload as IaddProductsFromLsToCartFx),
                        jwt: newTokens.accessToken,
                    })
                case 'deleteCartItemFx':
                    await deleteCartItemFx({
                        ...(payload as IDeleteCartItemsFx),
                        jwt: newTokens.accessToken,
                    })
                case 'loginCheckFx':
                    await loginCheckFx({
                        jwt: newTokens.accessToken,
                    })
                break
            }
        }
    }
    
  }