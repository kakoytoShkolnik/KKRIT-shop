'use client'
import { IOrderDetailsValues, IPickUpPointAddressData } from "@/types/order";
import { 
  getPickUpPointByCityFx, 
  order, 
  setCashPaymentTb, 
  setChosenCourierAddressData, 
  setChosenPickupAddressData, 
  setCourierAddressData, 
  setCourierTab, 
  setMapInstance, 
  setOnlinePaymentTb, 
  setOrderDetailsValues, 
  setPickupTab, 
  setShouldLoadPickUpPointData, 
  setShouldShowCourierAddressData 
} from ".";

export const $pickUpPointDataByCity = order
 .createStore<IPickUpPointAddressData[]>([])
 .on(getPickUpPointByCityFx.done, (_, { result }) => result)

export const $pickupTab = order
 .createStore<boolean>(true)
 .on(setPickupTab, (_, value) => value)

export const $courierTab = order
 .createStore<boolean>(false)
 .on(setCourierTab, (_, value) => value)

export const $mapInstance = order 
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 .createStore<any>({})
 .on(setMapInstance, (_, map) => map)

export const $shouldLoadPickUpPointData = order
 .createStore(false)
 .on(setShouldLoadPickUpPointData, (_, value) => value)

export const $chosenPickupAddressData = order
 .createStore<Partial<IPickUpPointAddressData>>({})
 .on(setChosenPickupAddressData, (_, value) => value)

export const $chosenCourierAddressData = order
 .createStore<Partial<IPickUpPointAddressData>>({})
 .on(setChosenCourierAddressData, (_, value) => value)

export const $shouldShowCourierAddressData = order
 .createStore(false)
 .on(setShouldShowCourierAddressData, (_, value) => value)

export const $courierAddressData = order
 .createStore<IPickUpPointAddressData>({} as IPickUpPointAddressData)
 .on(setCourierAddressData, (_, value) => value)

export const $onlinePaymentTab = order
  .createStore<boolean>(true)
  .on(setOnlinePaymentTb, (_, value) => value)

export const $cashPaymentTab = order
  .createStore<boolean>(false)
  .on(setCashPaymentTb, (_, value) => value)

export const $orderDetailsValues = order
  .createStore<IOrderDetailsValues>({} as IOrderDetailsValues)
  .on(setOrderDetailsValues, (_, value) => value)