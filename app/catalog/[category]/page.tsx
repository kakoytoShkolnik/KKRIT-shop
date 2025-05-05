import ProductsPage from '@/components/templates/ProductsPage/ProductsPage'
import { productCategories } from '@/constants/product'
import { notFound } from 'next/navigation'
import React from 'react'

export default function Category({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const unwParams = React.use(params)
  if (!productCategories.includes(unwParams.category)) {
    notFound()
  }

  //const { items } = useComparisonItems(unwParams.category)

  return <ProductsPage searchParams={unwParams || {}} pageName={unwParams.category} />
}