import styles from './titles.module.css'

const Titles = ({ title, description = null }) => {
  return (
    <div data-aos='fade-up' className={`${styles.content}`}>
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        className={`${styles.title}`}
      ></h3>
      {description && <p className={`${styles.frase}`}>{description}</p>}
    </div>
  )
}

export default Titles
