import ProductPage from '@/components/templates/ProductPage/ProductPage'
import ProductsPage from '@/components/templates/ProductsPage/ProductsPage'
import { productCategories } from '@/constants/product'
import { notFound } from 'next/navigation'
import React from 'react'

export default function Product({
  params,
}: {
  params: Promise<{ productId: string; category: string}>
}) {
  const unwParams = React.use(params)
  if (!productCategories.includes(unwParams.category)) {
    notFound()
  }

  return <ProductPage productId={unwParams.productId} category={unwParams.category} />
}