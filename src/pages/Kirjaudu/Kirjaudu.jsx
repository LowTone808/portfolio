import { Link } from 'react-router-dom'

import styles from './Kirjaudu.module.scss'

function Kirjaudu() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.label}>Human Digital Help</p>

        <h1>Kirjaudu</h1>

        <p className={styles.text}>
          Kirjautumistoiminto lisätään myöhemmin. Tällä hetkellä sivusto toimii
          palveluiden esittelysivuna.
        </p>

        <form className={styles.form}>
          <label>
            Sähköposti
            <input type="email" placeholder="nimi@example.com" disabled />
          </label>

          <label>
            Salasana
            <input type="password" placeholder="Salasana" disabled />
          </label>

          <button type="button" disabled>
            Tulossa myöhemmin
          </button>
        </form>

        <div className={styles.registerBox}>
          <p>Eikö sinulla ole vielä tiliä?</p>

          <Link to="/register" className={styles.registerLink}>
            Luo uusi tili
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Kirjaudu