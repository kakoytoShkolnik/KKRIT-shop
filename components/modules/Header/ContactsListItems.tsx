import { useLang } from "@/hooks/useLang"
import Link from "next/link"

const ContactsListItems = () => {
    const { lang, translations } = useLang()

    return (
        <>
            <li className='nav-menu__accordion__item'>
              <a 
                href='tel: +79029609437'
                className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
                >
                  +7 (902) 960 94 37
              </a>
            </li>
            <li className='nav-menu__accordion__item'>
              <a 
                href='mailto:karpovila333@gmail.com'
                className='nav-menu__accordion__item__link'
                >
                  Email
              </a>
            </li>
            <li className='nav-menu__accordion__item'>
              <Link
                href='https://t.me/killaAllik'
                className='nav-menu__accordion__item__link'
              >
                {translations[lang].main_menu.tg}
              </Link>
            </li>
            <li className='nav-menu__accordion__item'>
              <Link
                href='https://vk.com'
                className='nav-menu__accordion__item__link'
              >
                {translations[lang].main_menu.vk}
              </Link>
            </li>
        </>
    )
}

export default ContactsListItems