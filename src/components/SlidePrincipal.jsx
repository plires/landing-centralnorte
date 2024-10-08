import { useContext } from 'react'
import { StoreContext } from '../context/store'
import {
  getSlidesPrincipal,
  getCurrentMonth,
  getImageURL,
} from './../utils/dataUtils'

const SlidePrincipal = ({ interval }) => {
  const slidesPrincipal = getSlidesPrincipal('slidesPrincipal')
  const { isPromo } = useContext(StoreContext)
  return (
    <div
      id='carouselPrincipal'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
      data-bs-interval={interval}
      data-bs-pause='false'
    >
      <div className='carousel-inner'>
        {slidesPrincipal.map(item => (
          <div
            key={item.id}
            className={`carousel-item ${item.isActive ? 'active' : ''}`}
          >
            <img
              src={getImageURL(item.img_src)}
              className='d-block w-100'
              alt={item.img_alt}
            />
            <div className='carousel-caption'>
              {isPromo && (
                <div className='content_promo'>
                  <img
                    src={getImageURL(item.img_promo_src)}
                    alt={item.img_promo_alt}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.txt_promo.replace(
                        '[MONTH]',
                        getCurrentMonth(),
                      ),
                    }}
                  ></p>
                </div>
              )}
              <h2
                dangerouslySetInnerHTML={{ __html: item.h2_default }}
                className='subtitle'
              ></h2>

              <p
                dangerouslySetInnerHTML={{ __html: item.txt_default }}
                className='frase'
              ></p>
            </div>
            <div className='gradient'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SlidePrincipal
