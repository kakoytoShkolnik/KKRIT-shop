'use client'
import { addProductToCartFx, deleteCartItemFx, getCartItemFx, updateCartItemCountFx } from "@/api/cart";
import { handleJWTError } from "@/lib/utils/errors";
import { IaddProductsFromLsToCartFx, IAddProductToCartFx, ICartItem, IDeleteCartItemsFx, IUpdateCartItemCountFx } from "@/types/cart";
import { createDomain, createEffect, sample } from "effector";
import toast from "react-hot-toast";
import api from '../api/apiInstance'

export const addProductsFromLsToCartFx = createEffect(
  async ({ jwt, cartItems }: IaddProductsFromLsToCartFx) => {
    try{
        const { data } = await api.post(
          '/api/cart/add-many',
          { items: cartItems },
          {
              headers: { Authorization: `Bearer ${jwt}` },
          }
        )

        if (data?.error) {
          const newData: { cartItems: ICartItem[] } = await handleJWTError(
              data.error.name,
              {
                  repeatRequestMethodName: 'addProductsFromLsToCartFx',
                  payload: { items: cartItems },
              }
          )
          return newData
        }

        loadCartItems({ jwt })
        return data
    } catch (error) {
        toast.error((error as Error).message)
        
        
    }
  }
)

export const cart = createDomain()

export const loadCartItems = cart.createEvent<{ jwt: string }>()
export const setCartFromLS = cart.createEvent<ICartItem[]>()
export const addProductToCart = cart.createEvent<IAddProductToCartFx>()
export const addProductsFromLsToCart =
  cart.createEvent<IaddProductsFromLsToCartFx>()
export const updateCartItemCount = cart.createEvent<IUpdateCartItemCountFx>()
export const setTotalPrice = cart.createEvent<number>()
export const deleteProductFromCart = cart.createEvent<IDeleteCartItemsFx>()
export const setShouldShowEmpty = cart.createEvent<boolean>()

export const $cart = cart
  .createStore<ICartItem[]>([])
  .on(getCartItemFx.done, (_, {result}) => result)
  .on(addProductsFromLsToCartFx.done, (_, { result }) => result.items)
  .on(addProductToCartFx.done, (cart, { result }) => [
    ...new Map(
      [...cart, result.newCartItem].map((item) => [item.clientId, item])
    ).values(),
  ])
  .on(updateCartItemCountFx.done, (cart, { result }) =>
    cart.map((item) =>
      item._id === result.id ? { ...item, count: result.count } : item
    )
  )
  .on(deleteCartItemFx.done, (cart, { result }) =>
    cart.filter((item) => item._id !== result.id)
  )

export const $cartFromLs = cart
  .createStore<ICartItem[]>([])
  .on(setCartFromLS, (_, cart) => cart)

export const $totalPrice = cart
  .createStore<number>(0)
  .on(setTotalPrice, (_, value) => value)

export const $shouldShowEmpty = cart
  .createStore(false)
  .on(setShouldShowEmpty, (_, value) => value)

sample({
  clock: loadCartItems,
  source: $cart,
  fn: (_, data) => data,
  target: getCartItemFx,
})

sample({
    clock: addProductToCart,
    source: $cart,
    fn: (_, data) => data,
    target: addProductToCartFx,
})

sample({
  clock: addProductsFromLsToCart,
  source: $cart,
  fn: (_, data) => data,
  target: addProductsFromLsToCartFx,
})

sample({
  clock: updateCartItemCount,
  source: $cart,
  fn: (_, data) => data,
  target: updateCartItemCountFx,
})

sample({
  clock: deleteProductFromCart,
  source: $cart,
  fn: (_, data) => data,
  target: deleteCartItemFx,
})