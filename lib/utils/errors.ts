/* eslint-disable indent */
import { loginCheckFx, refreshTokenFx } from "@/api/auth"
import { addProductToCartFx, deleteCartItemFx, getCartItemFx } from "@/api/cart"
import { JWTError } from "@/constants/jwt"
import { addProductsFromLsToCartFx } from "@/context/cart"
import { addProductsFromLSToFavoritesFx, addProductToFavoriteFx, deleteFavoriteItemFx, getFavoriteItemsFx } from "@/context/favorites"
import { IaddProductsFromLsToCartFx, IAddProductToCartFx, IDeleteCartItemsFx } from "@/types/cart"
import { IAddProductsFromLSToFavoriteFx } from "@/types/favorites"

export const handleJWTError = async (
    errorName: string,
    repeatRequestAfterRefreshData?: {
      repeatRequestMethodName: string
      payload?: unknown
    }
  ) => {
    if (errorName === JWTError.EXPIRED_JWT_TOKEN) {
        const auth = JSON.parse(localStorage.getItem('auth') as string)
        const newTokens = await refreshTokenFx({ jwt: auth.refreshToken })

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
                case 'addProductToFavoriteFx':
                    return addProductToFavoriteFx({
                        ...(payload as Omit<IAddProductToCartFx, 'count'>),
                        jwt: newTokens.accessToken,
                    })
                case 'getFavoriteItemsFx':
                    return getFavoriteItemsFx({
                        jwt: newTokens.accessToken,
                    })
                case 'addProductsFromLSToFavoritesFx':
                    return addProductsFromLSToFavoritesFx({
                        ...(payload as IAddProductsFromLSToFavoriteFx),
                        jwt: newTokens.accessToken
                    })
                case 'deleteFavoriteItemFx':
                    return deleteFavoriteItemFx({
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