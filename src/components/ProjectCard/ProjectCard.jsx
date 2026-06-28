import styles from './ProjectCard.module.scss'

function ProjectCard({ title, description, technologies, liveUrl, githubUrl }) {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>

      <p>{description}</p>

      <div className={styles.technologies}>
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className={styles.links}>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Avaa sivu
          </a>
        )}

        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard