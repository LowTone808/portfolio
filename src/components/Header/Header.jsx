import { Link } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Human Digital Help
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header