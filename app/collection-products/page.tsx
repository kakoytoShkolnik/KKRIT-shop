import CollectionProductsPage from '@/components/templates/CollectionProductsPage/CollectionProductsPage'
import { Suspense } from 'react'

export default function CollectionProducts() {
  return (
    <Suspense>
      <CollectionProductsPage />
    </Suspense>
  )
}