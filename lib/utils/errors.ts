/* eslint-disable indent */
import { addProductToCartFx, deleteAllFromCartFx, deleteCartItemFx, getCartItemsFx } from "@/context/cart"
import { JWTError } from "@/constants/jwt"
import { refreshTokenFx } from "@/context/auth"
import { addProductsFromLSToCartFx } from "@/context/cart/"
import { addProductsFromLSToComparisonFx, addProductToComparisonFx, deleteComparisonItemFx, getComparisonItemsFx } from "@/context/comparison"
import { addProductsFromLSToFavoritesFx, addProductToFavoriteFx, deleteFavoriteItemFx, getFavoriteItemsFx } from "@/context/favorites"
import { loginCheckFx } from "@/context/users"
import { IAddProductsFromLsToCartFx, IAddProductToCartFx, IDeleteCartItemsFx } from "@/types/cart"
import { IAddProductsFromLSToComparisonFx, IAddProductToComparisonFx, IDeleteComparisonItemsFx } from "@/types/comparison"
import { IAddProductsFromLSToFavoriteFx } from "@/types/favorites"
import { makePaymentFx } from "@/context/order"
import { IMakePaymentFx } from "@/types/order"
import { deleteUserFx, editUserEmailFx, editUsernameFx, uploadUserAvatarFx, verifyCodeFx, verifyEmailFx } from "@/context/profile"
import { IDeleteUserFx, IEditUserEmailFx, IEditUsernameFx, IUploadUserAvatarFx, IVerifyCodeFx, IVerifyEmailFx } from "@/types/profile"

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
                    return getCartItemsFx({
                        jwt: newTokens.accessToken,
                    })
                case 'uploadUserAvatarFx':
                    return uploadUserAvatarFx({
                        ...(payload as IUploadUserAvatarFx),
                        jwt: newTokens.accessToken,
                    })
                case 'editUsernameFx':
                    return editUsernameFx({
                        ...(payload as IEditUsernameFx),
                        jwt: newTokens.accessToken,
                    })
                case 'verifyCodeFx':
                    return verifyCodeFx({
                        ...(payload as IVerifyCodeFx),
                        jwt: newTokens.accessToken,
                    })
                case 'verifyEmailFx':
                    return verifyEmailFx({
                        ...(payload as IVerifyEmailFx),
                        jwt: newTokens.accessToken,
                    })
                case 'editUserEmailFx':
                    return editUserEmailFx({
                        ...(payload as IEditUserEmailFx),
                        jwt: newTokens.accessToken,
                    })
                case 'deleteUserFx':
                    deleteUserFx({
                        ...(payload as IDeleteUserFx),
                        jwt: newTokens.accessToken,
                    })
                    break
                case 'getCartItemsFx':
                    return getCartItemsFx({
                        jwt: newTokens.accessToken,
                    })
                case 'getComparisonItemsFx': 
                    return getComparisonItemsFx({
                        jwt: newTokens.accessToken,
                    })
                case 'deleteComparisonItemFx':
                    await deleteComparisonItemFx({
                        ...(payload as IDeleteComparisonItemsFx),
                        jwt: newTokens.accessToken,
                    })
                case 'addProductsFromLSToComparisonFx':
                    return addProductsFromLSToComparisonFx({
                        ...(payload as IAddProductsFromLSToComparisonFx),
                        jwt: newTokens.accessToken,
                    })
                case 'makePaymentFx':
                    makePaymentFx({
                        ...(payload as IMakePaymentFx),
                        jwt: newTokens.accessToken,
                    })
                    break
                case 'deleteComparisonItemFx':
                    await deleteComparisonItemFx({
                        ...(payload as IDeleteComparisonItemsFx),
                        jwt: newTokens.accessToken,
                    })
                case 'deleteAllFromCartFx':
                    deleteAllFromCartFx({
                        jwt: newTokens.accessToken,
                    })
                    break
                case 'addProductsFromLsToCartFx':
                    return addProductsFromLSToCartFx({
                        ...(payload as IAddProductsFromLsToCartFx),
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