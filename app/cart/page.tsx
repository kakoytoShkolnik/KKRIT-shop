import CartPage from "@/components/templates/CartPage/CartPage";
import { Suspense } from "react";

export default function Cart() {
  return (
    <Suspense>
      <CartPage />
    </Suspense>  
  )
}