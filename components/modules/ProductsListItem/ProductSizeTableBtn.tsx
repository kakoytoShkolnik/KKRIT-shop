'use client'
import { useUnit } from 'effector-react'
import { $showQuickViewModal, showSizeTable } from '@/context/modals'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import { ISelectedSizes } from '@/types/common'
import { useLang } from '@/hooks/useLang'
import { setSizeTableSizes } from '@/context/sizeTable'
//import { setIsAddToFavorites } from '@/context/favorites'

const ProductSizeTableBtn = ({ sizes, type, className }: ISelectedSizes) => {
  const { lang, translations } = useLang()
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleShowSizeTable = () => {
    //setIsAddToFavorites(false)

    if (!showQuickViewModal) {
      addOverflowHiddenToBody()
    }

    setSizeTableSizes({ sizes, type })
    showSizeTable()
  }

  return (
    <button className={`btn-reset ${className}`} onClick={handleShowSizeTable}>
      {translations[lang].product.size_table}
    </button>
  )
}

export default ProductSizeTableBtn