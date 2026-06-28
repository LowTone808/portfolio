import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h2>Human Digital Help</h2>

          <p>
            Selkeää digi-apua tietokoneiden, nettisivujen ja digitaalisten
            ratkaisujen kanssa.
          </p>
        </div>

        <nav className={styles.links}>
          <Link to="/palvelut">Palvelut</Link>
          <Link to="/projektit">Projektit</Link>
          <Link to="/yhteystiedot">Yhteystiedot</Link>
        </nav>
      </div>

      <p className={styles.copy}>
        © 2026 — Human Digital Help
      </p>
    </footer>
  )
}

export default Footer