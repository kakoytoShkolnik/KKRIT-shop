'use client'
import { Toaster } from "react-hot-toast"
import { useUnit } from "effector-react"
import { Next13ProgressBar } from 'next13-progressbar'
import { usePathname, useRouter } from "next/navigation"
import { 
    closeQuickViewModal
} from "@/context/modals"
import Layout from "./Layout"
import { closeSizeTableByCheck, handleCloseAuthPopup, handleCloseShareModal, isUserAuth, removeOverflowHiddenFromBody } from "@/lib/utils/common"
import { $openAuthPopup } from "@/context/auth/state"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CookieAlert from "../modules/CookieAlert/CookieAlert"
import { $shareModal, $showQuickViewModal, $showSizeTable } from "@/context/modals/state"
import { loginCheckFx } from "@/context/users"
import '@/context/goods/init'
import '@/context/auth/init'
import '@/context/cart/init'
import '@/context/comparison/init'
import '@/context/favorites/init'
import '@/context/users/init'
import '@/context/order/init'
import '@/context/profile/init'
import '@/context/passwordRestore/init'

const PagesLayout = ({ children }: {children: React.ReactNode }) => {
    const [cookieAlertOpen, setCookieAlertOpen] = useState(false)
    const [shouldShowContent, setShouldShowContent] = useState(false)
    const showQuickViewModal = useUnit($showQuickViewModal)
    const showSizeTable = useUnit($showSizeTable)
    const openAuthPopup = useUnit($openAuthPopup)
    const shareModal = useUnit($shareModal)
    const protectedRoutes = ['/profile']
    const pathname = usePathname()
    const router = useRouter()
    
    useEffect(() => {
        if (protectedRoutes.includes(pathname)) {
            if (!isUserAuth()) {
                setShouldShowContent(false)
                router.push('/')
                return
            }

            handleLoadProtectedRoute()
            return
        }

        setShouldShowContent(true)
    }, [pathname])

    const handleLoadProtectedRoute = async () => {
        const auth = JSON.parse(localStorage.getItem('auth') as string)

        await loginCheckFx({ jwt: auth.accessToken })

        setShouldShowContent(true)
    }

    const handleCloseQuickViewModal = () => {
        removeOverflowHiddenFromBody()
        closeQuickViewModal()
    }

    const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal)

    useEffect(() => {
        const checkCookie = document.cookie.indexOf('CookieBy=KKRIT')
        checkCookie != -1
          ? setCookieAlertOpen(false)
          : setTimeout(() => setCookieAlertOpen(true), 3000)
    }, [])

    return (
            <html lang="en">
                <body>
                    <Next13ProgressBar height='4px' color='#9466ff' showOnShallow/>
                    {shouldShowContent && <Layout>{children}</Layout>}
                    <div 
                     className={`quick-view-modal-overlay ${
                      showQuickViewModal ? 'overlay-active' : ''
                     }`}
                     onClick={handleCloseQuickViewModal}
                    />
                    <div 
                     className={`size-table-overlay ${
                        showSizeTable ? 'overlay-active' : ''
                     }`} 
                     onClick={handleCloseSizeTable}
                    />
                    <div
                     className={`auth-overlay ${
                      openAuthPopup ? 'overlay-active' : ''
                     }`}
                     onClick={handleCloseAuthPopup}
                    />
                    <div
                     className={`share-overlay ${
                        shareModal ? 'overlay-active' : ''
                     }`}
                     onClick={handleCloseShareModal}
                    />
                    {cookieAlertOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className='cookie-popup'
                        >
                            <CookieAlert setCookieAlertOpen={setCookieAlertOpen} />
                        </motion.div>
                    )}
                    <Toaster position='top-center' reverseOrder={false}/>
                </body>
            </html>
    )
}

export default PagesLayout