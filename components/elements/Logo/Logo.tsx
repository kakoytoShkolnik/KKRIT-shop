import Link from 'next/link'

const Logo = () => (
    <Link className='logo' href='/'>
        <img className='logo__img' src="/img/Logos.svg" alt="KKRIT Logo"/>
    </Link>
)

export default Logo