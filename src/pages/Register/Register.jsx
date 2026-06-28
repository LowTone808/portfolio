import { Link } from 'react-router-dom'

import styles from './Register.module.scss'

function Register() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.label}>Human Digital Help</p>

        <h1>Luo uusi tili</h1>

        <p className={styles.text}>
          Rekisteröityminen lisätään myöhemmin. Tulevaisuudessa käyttäjä voi
          luoda tilin ja käyttää sivuston lisätoimintoja.
        </p>

        <form className={styles.form}>
          <label>
            Nimi
            <input type="text" placeholder="Oma nimi" disabled />
          </label>

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

        <div className={styles.loginBox}>
          <p>Onko sinulla jo tili?</p>

          <Link to="/kirjaudu" className={styles.loginLink}>
            Kirjaudu sisään
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register