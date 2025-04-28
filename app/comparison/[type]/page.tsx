'use client'
import ComparisonList from '@/components/modules/Comparison/ComparisonList'
import { productTypes } from '@/constants/product'
import { useComparisonItems } from '@/hooks/useComparisonItems'
import { notFound } from 'next/navigation'
import React from 'react'

export default function ComparisonType({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const unwParams = React.use(params)
  if (!productTypes.includes(unwParams.type)) {
    notFound()
  }

  const { items } = useComparisonItems(unwParams.type)

  return <ComparisonList items={items} />
}