import tilde from '@/assets/img/tilde.svg'

import styles from './item-caracteristica.module.css'

const ItemCaracteristica = ({ title }) => {
  return (
    <article className={`${styles.item} col-6 col-md-3`}>
      <div className={`${styles.content}`}>
        <img className='img-fluid' src={tilde} alt='tilde' />
        <p
          className={`${styles.title}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </article>
  )
}

export default ItemCaracteristica
