import { blogPosts } from '../../data/blogPosts'

import styles from './Blogi.module.scss'

function Blogi() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Blogini</h1>

        <p>
          Täällä jaan ajatuksia projekteista, opiskelusta, web-kehityksestä ja
          digitaalisista ratkaisuista.
        </p>
      </div>

      <div className={styles.posts}>
        {blogPosts.map((post) => (
          <article className={styles.card} key={post.id}>
            <div className={styles.meta}>
              <span>{post.date}</span>
            </div>

            <h2>{post.title}</h2>

            <p>{post.description}</p>

            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blogi