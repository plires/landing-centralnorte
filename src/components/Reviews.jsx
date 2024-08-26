import Titles from '@/components/Titles'
import Estrellas from '@/components/Estrellas'

import { getResenas, getImageURL } from './../utils/dataUtils'

import Slider from 'react-slick'
import './../../node_modules/slick-carousel/slick/slick.css'
import './../../node_modules/slick-carousel/slick/slick-theme.css'

import styles from './reviews.module.css'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        arrows: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        arrows: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
}

const Reviews = () => {
  const resenas = getResenas('resenas')

  return (
    <section data-aos='fade-up' className={`${styles.reviews}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Titles title='10 años de trayectoria <br />con grandes clientes' />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {resenas.map(resena => (
          <article key={resena.id} className={`${styles.container_review}`}>
            <div className={`${styles.content_review}`}>
              <Estrellas resena={resena} />
              <p className={`${styles.comments}`}>{resena.comment}</p>
              <div className={`${styles.separator}`}></div>
              <div className={`${styles.content_footer}`}>
                <img
                  className={`${styles.img_thumbnail} img-fluid`}
                  src={getImageURL(resena.img)}
                  alt={resena.name + ' - ' + resena.id}
                />
                <p className={`${styles.name}`}>{resena.name}</p>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  )
}

export default Reviews
