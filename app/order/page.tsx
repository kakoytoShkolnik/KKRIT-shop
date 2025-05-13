import OrderPage from "@/components/templates/OrderPage.tsx/OrderPage";
import { Suspense } from "react";

export default function Order() {
  return (
    <Suspense>
      <OrderPage />
    </Suspense>
  )
}