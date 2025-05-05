import ProductsPage from '@/components/templates/ProductsPage/ProductsPage'
import { SearchParams } from '@/types/catalog'

export default async function Catalog({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams
  return (
      <ProductsPage searchParams={resolvedSearchParams || {}} pageName='catalog' />
  )
}