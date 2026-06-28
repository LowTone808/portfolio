import { education, experience, profileInfo, skills } from '../../data/cv'

import viktorImage from '../../assets/images/viktor-dog.jfif'

import styles from './CV.module.scss'

function CV() {
  return (
    <section className={styles.page}>
      <div className={styles.profile}>
        <div className={styles.profileText}>
          <h1>{profileInfo.title}</h1>

          {profileInfo.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <img
          className={styles.image}
          src={viktorImage}
          alt={profileInfo.imageAlt}
        />
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2>Koulutus</h2>

          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Taidot</h2>

          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </div>

      <article className={styles.card}>
        <h2>Kokemus</h2>

        <div className={styles.experienceList}>
          {experience.map((item) => (
            <div className={styles.experienceItem} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default CV