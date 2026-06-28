import { contactInfo, contactMethods } from '../../data/contact'

import styles from './Yhteystiedot.module.scss'

function Yhteystiedot() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>{contactInfo.title}</h1>
        <p>{contactInfo.subtitle}</p>
      </div>

      <div className={styles.cards}>
        {contactMethods.map((method) => (
          <article className={styles.card} key={method.title}>
            <h2>{method.title}</h2>
            <p>{method.text}</p>
            <strong>{method.value}</strong>
          </article>
        ))}
      </div>

      <div className={styles.actions}>
        <a className={styles.primaryButton} href={`mailto:${contactInfo.email}`}>
          Lähetä sähköposti
        </a>

      </div>

      <div className={styles.messageHelp}>
        <h2>Mitä viestiin kannattaa kirjoittaa?</h2>

        <ul>
          <li>Mikä ongelma tai tarve sinulla on?</li>
          <li>Tarvitsetko apua etänä vai tulenko paikan päälle?</li>
          <li>Onko kyse tietokoneesta, nettisivusta vai digitaalisesta ratkaisusta?</li>
          <li>Milloin apua tarvitaan?</li>
        </ul>
      </div>
    </section>
  )
}

export default Yhteystiedot