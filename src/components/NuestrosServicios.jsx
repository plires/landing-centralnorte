import ContentData from '@/components/ContentData'
import Titles from '@/components/Titles'
import slideOne from '@/assets/img/servicios-a.jpg'
import slideTwo from '@/assets/img/servicios-b.jpg'
import slideOneOpt from '@/assets/img/servicios-a.webp'
import slideTwoOpt from '@/assets/img/servicios-b.webp'

import styles from './nuestros-servicios.module.css'

const NuestrosServicios = () => {
  return (
    <section className={`${styles.nuestros_servicios}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Titles title='Nuestros servicios' />
          </div>
        </div>
      </div>

      <div
        className={`${styles.content_nuestros_servicios} container-fluid p-0`}
      >
        <div className={`${styles.faja}`}>
          <div className={`${styles.faja_logos}`}></div>
        </div>

        <div className={`${styles.content} col-md-12`}>
          <div
            id='carouselServiciosSlidesOnly'
            className={`carousel slide carousel-fade ${styles.carru}`}
            data-bs-ride='carousel'
            data-bs-pause='false'
          >
            <div className='carousel-inner'>
              <div className={`carousel-item active`}>
                <picture>
                  <source srcSet={slideOneOpt} type='image/webp' />
                  <source srcSet={slideOne} type='image/jpeg' />

                  <img
                    className={`d-block w-100 ${styles.img_carru}`}
                    src={slideOne}
                    alt='slide 1 Merchandising'
                  />
                </picture>

                <div className={`${styles.content_data}`}>
                  <ContentData
                    frase='Ofrecemos soluciones integrales para tu marca y complementamos nuestro servicio con co-packing, armado y distribución.'
                    message='Necesito más información...'
                    textButton='QUIERO MÁS INFORMACIÓN'
                  />
                </div>
              </div>
              <div className={`carousel-item ${styles.item_carrusel}`}>
                <picture>
                  <source srcSet={slideTwoOpt} type='image/webp' />
                  <source srcSet={slideTwo} type='image/jpeg' />

                  <img
                    className={`d-block w-100 ${styles.img_carru}`}
                    src={slideTwo}
                    alt='slide 2 Merchandising'
                  />
                </picture>
                <div className={`${styles.content_data}`}>
                  <ContentData
                    frase='Complementamos nuestro servicio con co-packing, armado y distribución. Recibimos tus productos y los entregamos a tus clientes con un servicio de calidad.'
                    message='Necesito más información...'
                    textButton='QUIERO MÁS INFORMACIÓN'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestrosServicios
