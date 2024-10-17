import { useContext } from 'react'
import { StoreContext } from '../context/store'
import Titles from '@/components/Titles'

import {
  getFeaturedProducts,
  getCurrentMonth,
  getImageURL,
  scrollToTop,
} from './../utils/dataUtils'

import Slider from 'react-slick'
import './../../node_modules/slick-carousel/slick/slick.css'
import './../../node_modules/slick-carousel/slick/slick-theme.css'
import './featured-products.css'

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

const FeaturedProducts = () => {
  const { setMessage, isPromo, textAreaRef } = useContext(StoreContext)
  const featuredProducts = getFeaturedProducts('featuredProducts')

  return (
    <section data-aos='fade-up' className='featured_products'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Titles title='Productos destacados del mes' />
            {isPromo && (
              <p className='promo title_promo'>
                MODELOS EN PROMOCIÓN <br />
                ¡SÓLO POR {getCurrentMonth()}!
              </p>
            )}
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {featuredProducts.map(product => (
          <div key={product.id} className='container_product'>
            <div className='content_product'>
              <img
                className='img-fluid img_thumbnail'
                src={getImageURL(product.img_src)}
                alt={product.name + product.id}
              />
              <p>{product.name}</p>
              <button
                className='btn'
                onClick={() =>
                  scrollToTop(
                    product.name,
                    setMessage,
                    isPromo,
                    null,
                    textAreaRef.current,
                  )
                }
              >
                Consultar
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default FeaturedProducts
