import { useContext } from 'react'
import { StoreContext } from '../context/store'
import Titles from '@/components/Titles'

import { scrollToTop, getImageURL } from '@/utils/dataUtils.js'

import styles from './kits.module.css'

const Kits = ({ data, title, description = null }) => {
  const { setMessage, isPromo, textAreaRef } = useContext(StoreContext)

  return (
    <section className={`${styles.kits} container-fluid`}>
      <div className='row'>
        <div className='col-md-12'>
          <Titles title={title} description={description} />
        </div>

        <div className='col-md-12'>
          <div className='row'>
            {data.map(item => (
              <article
                data-aos='fade-up'
                key={item.id}
                className={`col-md-4 ${styles.content_kit}`}
              >
                <div className={`${styles.content_img}`}>
                  <div className={`${styles.gradient}`}></div>
                  <picture>
                    <source
                      srcSet={getImageURL(item.img_src_opt)}
                      type='image/webp'
                    />
                    <source
                      srcSet={getImageURL(item.img_src)}
                      type='image/jpeg'
                    />

                    <img
                      className={`img-fluid`}
                      src={getImageURL(item.img_src)}
                      alt={item.title + item.id}
                    />
                  </picture>
                  <div className={`${styles.footer}`}>
                    <h3>{item.title}</h3>
                    <button
                      className={`${styles.button_kit} btn`}
                      onClick={() =>
                        scrollToTop(
                          item.title,
                          setMessage,
                          isPromo,
                          null,
                          textAreaRef.current,
                        )
                      }
                    >
                      {item.txt_btn}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kits
