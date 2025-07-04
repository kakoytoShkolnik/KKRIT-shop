import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { formatPrice } from '@/lib/utils/common'
import { IOrderCartItemProps } from '@/types/order'
import styles from '@/styles/order/index.module.scss'

const OrderCartItemList = ({ item, position }: IOrderCartItemProps) => {
  const { lang, translations } = useLang()

    return (
        <>
            <li className={styles.order__list__item__list__item}>
            <span className={styles.order__list__item__list__item__pos}>
                {position}.
            </span>
            <div className={styles.order__list__item__list__item__img}>
                <Image src={item.image.url} alt={item.name} width={156} height={156} />
            </div>
            <div className={styles.order__list__item__list__item__inner}>
                <span className={styles.order__list__item__list__item__name}>
                {item.name}
                </span>
                <span className={styles.order__list__item__list__item__info}>
                <span>{translations[lang].order.color}: </span>
                {
                    (translations[lang].catalog as { [index: string]: string })[
                    item.color
                    ]
                }
                </span>
                {item.size && (
                <span className={styles.order__list__item__list__item__info}>
                    <span>{translations[lang].order.size}: </span>
                    {item.size.toUpperCase()}
                </span>
                )}
                <span className={styles.order__list__item__list__item__info}>
                <span>{translations[lang].order.count}: </span>
                {item.count} шт.
                </span>
                <span className={styles.order__list__item__list__item__info}>
                <span>{translations[lang].order.sum}: </span>
                {formatPrice(+item.price * +item.count)} ₽
                </span>
            </div>
            </li>
        </>
    )
}

export default OrderCartItemList