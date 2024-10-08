import { getSlidesSecundarioInferior, getImageURL } from './../utils/dataUtils'

const SlideSecundarioInferior = ({ interval }) => {
  const slidesSecundarioInferior = getSlidesSecundarioInferior(
    'slidesSecundarioInferior',
  )
  return (
    <div
      id='carouselPrincipal'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
      data-bs-interval={interval}
      data-bs-pause='false'
    >
      <div className='carousel-inner'>
        {slidesSecundarioInferior.map(item => (
          <div
            key={item.id}
            className={`carousel-item ${item.isActive ? 'active' : ''}`}
          >
            <img
              src={getImageURL(item.img_src)}
              className='d-block w-100'
              alt={item.img_alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SlideSecundarioInferior
