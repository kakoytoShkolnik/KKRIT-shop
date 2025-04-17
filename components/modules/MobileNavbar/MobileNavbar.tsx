'use client'
import Link from "next/link"
import { closeCatalogMenu,
     closeMenu, 
     openCatalogMenu, 
     openMenu } from "@/context/modals"
import { useLang } from "@/hooks/useLang"
import { addOverflowHiddenToBody } from "@/lib/utils/common"
import CatalogMenu from "../Header/CatalogMenu"
import { useCartByAuth } from "@/hooks/useCartByAuth"

const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0')
    openCatalogMenu()
    closeMenu()
  }

const MobileNavbar = () => {
    const { lang, translations } = useLang()
    const currentCartByAuth = useCartByAuth()
    return (
        <>
            <CatalogMenu />
            <div className='mobile-navbar'>
                <Link href='/' className='btn-reset mobile-navbar__btn'>
                    {translations[lang].breadcrumbs.main}
                </Link>
                <button
                 className='btn-reset mobile-navbar__btn'
                 onClick={handleOpenCatalogMenu}
                >
                    {translations[lang].breadcrumbs.catalog}
                </button>
                <Link href='/favoritess' className='bten-reset mobile-navbar__btn'>
                    {translations[lang].breadcrumbs.favorites}
                </Link>
                <Link href='/cart' className='btn-reset mobile-navbar__btn'>
                    {!!currentCartByAuth.length && <span className='not-empty not-empty-mobile' />}
                    {translations[lang].breadcrumbs.cart}
                </Link>
                <button
                 className='btn-reset mobile-navbar__btn'
                 onClick={handleOpenMenu}
                >
                    {translations[lang].common.more}
                </button>
            </div>
        </>
    )
}

export default MobileNavbar