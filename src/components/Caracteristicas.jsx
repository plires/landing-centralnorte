import ItemCaracteristica from './ItemCaracteristica'
import Titles from '@/components/Titles'
import styles from './caracteristicas.module.css'

const Caracteristicas = () => {
  return (
    <section className={`${styles.caracterisitcas} container`}>
      <div className='row'>
        <div className='col-md-12'>
          <Titles title='Creamos tus productos <br />con los mejores materiales' />
        </div>
      </div>
      <div data-aos='fade-up' className='row'>
        <ItemCaracteristica title='Visibilidad<br /> de marca' />
        <ItemCaracteristica title='Lealtad con tu<br /> cliente' />
        <ItemCaracteristica title='Posicionamiento y diferenciación en el mercado ' />
        <ItemCaracteristica title='Publicidad ecónomica y duradera  de marca' />
      </div>
    </section>
  )
}

export default Caracteristicas
