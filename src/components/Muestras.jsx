import ContentData from '@/components/ContentData'
import Titles from '@/components/Titles'
import stylesMuestras from './muestras.module.css'

const Muestras = () => {
  return (
    <section className={` ${stylesMuestras.nuestros_servicios}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Titles title='¿Listo para potenciar tu marca?' />
          </div>
        </div>
      </div>
      <div
        className={`${stylesMuestras.content_nuestros_servicios} container-fluid`}
      >
        <div className={`${stylesMuestras.faja}`}></div>
        <div className={`row ${stylesMuestras.content_row}`}>
          <div className={`${stylesMuestras.content} col-md-10 offset-md-1`}>
            <ContentData
              frase='Desde kits personalizados de productos creativos para celebraciones hasta ropa de trabajo funcional, ofrecemos una amplia gama de opciones que se adaptan a tus necesidades.'
              message='Por favor, necesito ver muestras de productos...'
              textButton='NECESITO VER UNA MUESTRA DEL PRODUCTO'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Muestras
