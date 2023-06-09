import { ActiveLink } from './ActiveLink'

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={ styles.menu__container }>
        <ActiveLink text="Home" href="/"></ActiveLink>
        <ActiveLink text="About" href="/about"></ActiveLink>
        <ActiveLink text="Contact" href="/contact"></ActiveLink>
    </nav>
  )
}
