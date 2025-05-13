'use client'
import { useUnit } from "effector-react"
import { $cart, $cartFromLs } from "@/context/cart/state"
import { $mapModal } from "@/context/modals/state"
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import { useGoodsByAuth } from "@/hooks/useGoodsByAuth"
import { useLang } from "@/hooks/useLang"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import styles from '@/styles/order/index.module.scss'
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs"
import OrderTitle from "@/components/modules/OrderPage/OrderTitle"
import OrderInfoBlock from "@/components/modules/OrderInfoBlock/OrderInfoBlock"
import OrderDelivery from "@/components/modules/OrderPage/OrderDelivery"
import { AnimatePresence, motion } from "framer-motion"
import MapModal from "@/components/modules/OrderPage/MapModal"
import { basePropsForMotion } from "@/constants/motion"
import OrderCartItemList from "@/components/modules/OrderPage/OrderCartItemList"
import OrderCartItemTable from "@/components/modules/OrderPage/OrderCartItemTable"
import OrderPayment from "@/components/modules/OrderPage/OrderPayment"
import OrderDetailsForm from "@/components/modules/OrderPage/OrderDetailsForm"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { $chosenCourierAddressData, $chosenPickupAddressData, $orderDetailsValues, $scrollToRequiredBlock } from "@/context/order/state"
import toast from "react-hot-toast"
import { isUserAuth } from "@/lib/utils/common"
import { useRouter } from "next/navigation"

const OrderPage = () => {
    const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('order')
    const { lang, translations } = useLang()
    const currentCartByAuth = useGoodsByAuth($cart, $cartFromLs)
    const isMedia1220 = useMediaQuery(1220)
    const mapModal = useUnit($mapModal)
    const scrollToRequiredBlock = useUnit($scrollToRequiredBlock)
    const shouldScrollToDelivery = useRef(true)
    const [ isFirstRender, setIsFirstRender ] = useState(true)
    const deliveryBlockRef = useRef() as MutableRefObject<HTMLLIElement>
    const detailsBlockRef = useRef() as MutableRefObject<HTMLLIElement>
    const chosenCourierAddressData = useUnit($chosenCourierAddressData)
    const chosenPickupAddressData = useUnit($chosenPickupAddressData)
    const orderDetailsValues = useUnit($orderDetailsValues)
    const router = useRouter()

    const scrollToBlock = (selector: HTMLLIElement) =>
        window.scrollTo({
            top: selector.getBoundingClientRect().top + window.scrollY + -50,
            behavior: 'smooth',
        })

    useEffect(() => {
        if (shouldScrollToDelivery.current) {
            shouldScrollToDelivery.current = false
            setIsFirstRender(false)
        }

        clearCartByPayment()
    }, [])

    useEffect(() => {
        if (isFirstRender) {
            return
        }

        if (!orderDetailsValues.isValid) {
            scrollToBlock(detailsBlockRef.current)
            return
        }

        if (
         !chosenCourierAddressData.address_line1 &&
         !chosenPickupAddressData.address_line1
        ) {
            scrollToBlock(deliveryBlockRef.current)
            toast.error('Нужно выбрать адрес!')
        }
    }, [scrollToRequiredBlock])

    const clearCartByPayment = async () => {
        const paymentId = JSON.parse(localStorage.getItem('paymentId') as string)

        if (!isUserAuth() || !paymentId) {
            return
        }
        
        router.push('/payment-success')
    }
    return (
        <main>
            <Breadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator}
            />
            <section className={styles.order}>
                <div className='container'>
                    <h1 className={styles.order__title}>
                        {translations[lang].breadcrumbs.order}
                    </h1>
                    <div className={styles.order__inner}>
                        <div className={styles.order__inner__left}>
                            <ul className={`list-reset ${styles.order__list}`}>
                                <li className={styles.order__list__item}>
                                    <OrderTitle
                                        orderNumber='1'
                                        text={translations[lang].order.order}
                                    />
                                    {isMedia1220 ? (
                                        <ul
                                         className={`list-reset ${styles.order__list__item__list}`}
                                        >
                                            {currentCartByAuth.map((item, i) => (
                                                <OrderCartItemList
                                                 key={item._id || item.clientId}
                                                 item={item}
                                                 position={i + 1}
                                                />
                                            ))}
                                        </ul>
                                    ) : (
                                        <table className={styles.order__list__item__table}>
                                            <thead>
                                                <tr>
                                                    <th>{translations[lang].order.name}</th>
                                                    <th>{translations[lang].order.size}</th>
                                                    <th>{translations[lang].order.color}</th>
                                                    <th>{translations[lang].order.count}</th>
                                                    <th>{translations[lang].order.sum}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {currentCartByAuth.map((item, i) => (
                                                <OrderCartItemTable
                                                 key={item._id || item.clientId}
                                                 item={item}
                                                 position={i + 1}
                                                />
                                            ))}
                                            </tbody>
                                        </table>
                                    )}
                                </li>
                                <li className={`${styles.order__list__item} order-block`} ref={deliveryBlockRef}>
                                    <OrderDelivery />
                                </li>
                                <li className={styles.order__list__item}>
                                    <OrderTitle
                                     orderNumber='3'
                                     text={translations[lang].order.payment}
                                    />
                                    <OrderPayment />
                                </li>
                                <li className={styles.order__list__item} ref={detailsBlockRef}>
                                    <OrderTitle
                                     orderNumber='4'
                                     text={translations[lang].order.recipient_details}
                                    />
                                    <div className={styles.order__list__item__details}>
                                        <p className={styles.order__list__item__details__title}>
                                            {translations[lang].order.enter_details}
                                        </p>
                                        <OrderDetailsForm />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.order__inner__right}>
                            <div className={styles.order__inner__right__order}>
                                <OrderInfoBlock isOrderPage />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AnimatePresence>
                {mapModal && (
                    <motion.div className={styles.map_modal} {...basePropsForMotion}>
                        <MapModal />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}

export default OrderPage