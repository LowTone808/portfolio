import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

import styles from './Projektit.module.scss'

function Projektit() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Projektit</h1>

        <p>
          Tällä sivulla esittelen projekteja, joiden kautta olen harjoitellut
          web-kehitystä, käyttöliittymiä, JavaScriptiä ja digitaalisia ratkaisuja.
        </p>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default Projektit