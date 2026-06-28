import { Link } from 'react-router-dom'
import styles from './Etusivu.module.scss'

function Etusivu() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.label}>Human Digital Help</p>

        <h1>Selkeää digi-apua ihmisille ja pienyrityksille</h1>

        <p className={styles.text}>
          Apua tietokoneiden, nettisivujen ja pienten digitaalisten ratkaisujen
          kanssa nopeasti, rehellisesti ja ilman turhaa päänsärkyä.
        </p>

        <div className={styles.actions}>
          <Link to="/palvelut" className={styles.primaryButton}>
            Katso palvelut
          </Link>

        </div>
      </div>

      <div className={styles.cards}>
        <article className={styles.card}>
          <h2>Tietokoneapu</h2>
          <p>
            Apua tietokoneen huoltoon, ohjelmien asennukseen,
            Windows/Linux-asioihin ja laitteen käyttökunnon parantamiseen.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Nettisivut</h2>
          <p>
            Selkeät ja kevyet nettisivut pienyrityksille, yhdistyksille,
            portfolioon tai henkilökohtaiseen käyttöön.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Digitaaliset ratkaisut</h2>
          <p>
            Pienet lomakkeet, projektisivut, tapahtumasivut ja käytännölliset
            ratkaisut arjen tai työn helpottamiseen.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Etusivu