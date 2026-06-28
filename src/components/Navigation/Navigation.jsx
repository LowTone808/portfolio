import { NavLink } from 'react-router-dom'

import { navLinks } from '../../data/navLinks'

import styles from './Navigation.module.scss'

function Navigation() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation