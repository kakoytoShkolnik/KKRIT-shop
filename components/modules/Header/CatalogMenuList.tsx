import { motion } from 'framer-motion'
import Link from 'next/link'

const CatalogMenuList = ({ 
  items 
}: { 
  items: {
    title: string;
    href: string;
    handleCloseMenu: () => void;
  }[] 
}) => (
  <motion.ul
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='list-reset nav-menu__accordion'
  >
    {items.map((items, i) => (
      <li
        key={i}
        className='nav-menu__accordion__item__list__item catalog__accordion__item__list__item'
        style={{ position: 'relative' }}
      >
        <Link
          href={items.href}
          className='nav-menu__accordion__item__list__item__link'
          onClick={items.handleCloseMenu}
        >
          {items.title}
        </Link>
      </li>
    ))}
  </motion.ul>
)

export default CatalogMenuList