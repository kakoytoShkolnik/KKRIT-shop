import ComparisonLayout from "@/components/layouts/ComparisonLayout"
import { Suspense } from "react"

export const metadata = {
  title: 'ККРИТ | Сравнение товаров',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //<Suspense>
      <ComparisonLayout>{children}</ComparisonLayout>
    //</Suspense>
  )
}