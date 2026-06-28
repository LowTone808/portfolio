import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { services } from '../../data/services'

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
    </section>
  )
}

export default Palvelut