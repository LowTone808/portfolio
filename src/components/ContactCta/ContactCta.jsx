import { Link } from 'react-router-dom'

import styles from './ContactCta.module.scss'

function ContactCta() {
  return (
    <section className={styles.cta}>
      <h2>Tarvitsetko apua digiasioissa?</h2>

      <p>
        Ota yhteyttä, niin katsotaan yhdessä sopiva ratkaisu tietokoneen,
        nettisivun tai digitaalisen ongelman kanssa.
      </p>

      <Link to="/yhteystiedot" className={styles.button}>
        Ota yhteyttä
      </Link>
    </section>
  )
}

export default ContactCta