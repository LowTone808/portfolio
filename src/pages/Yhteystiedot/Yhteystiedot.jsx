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
        <a
          className={styles.primaryButton}
          href={`mailto:${contactInfo.email}`}
        >
          Lähetä sähköposti
        </a>

        <a
          className={styles.secondaryButton}
          href={contactInfo.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Yhteystiedot