import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { services } from '../../data/services'
import ContactCta from '../../components/ContactCta/ContactCta'
import styles from './Palvelut.module.scss'

function Palvelut() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Human Digital Help</h1>

        <p>
          Onko tietokoneen kanssa ongelmia? Onko nettisivu vanhentunut?
          Ettekö tiedä, minkälainen laite sopii teidän tarpeisiinne?
        </p>

        <p>
          <strong>Human Digital Help</strong> auttaa ratkaisemaan digiongelmia nopeasti,
          rehellisesti ja ilman turhaa päänsärkyä.
        </p>
      </div>

      <div className={styles.services}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            items={service.items}
          />
        ))}
      </div>
      <div className={styles.prices}>
  <h2>Hinnat alkaen</h2>

  <div className={styles.priceGrid}>
    <article className={styles.priceCard}>
      <h3>Tietokoneapu</h3>
      <p>Alkaen 20€</p>
    </article>

    <article className={styles.priceCard}>
      <h3>Nettisivut</h3>
      <p>Alkaen 50€</p>
    </article>

    <article className={styles.priceCard}>
      <h3>Pienet digitaaliset ratkaisut</h3>
      <p>Konsultointi on ilmaista</p>
      <p>Isommista ongelmista hinnasta sovitaan erikseen</p>
    </article>
  </div>
</div>
      <ContactCta />
    </section>
  )
}

export default Palvelut