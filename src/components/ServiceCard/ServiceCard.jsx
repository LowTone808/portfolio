import styles from './ServiceCard.module.scss'

function ServiceCard({ title, description, items }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default ServiceCard