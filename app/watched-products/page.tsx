import WatchedProductsPage from "@/components/templates/WatchedProductsPage/WatchedProductsPage";
import { Suspense } from "react";

export default function WatchedProducts() {
  return (
    <Suspense>
      <WatchedProductsPage />
    </Suspense>
  )
}