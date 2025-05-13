import { sample } from "effector";
import { getPickUpPointByCityFx, getPickUpPointByCity, makePayment, makePaymentFx } from ".";

sample({
  clock: getPickUpPointByCity,
  source: { },
  fn: (_, data) => data,
  target: getPickUpPointByCityFx,
})

sample({
  clock: makePayment,
  source: { },
  fn: (_, data) => data,
  target: makePaymentFx,
})