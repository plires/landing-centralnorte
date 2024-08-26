import logo from '@/assets/img/logo-central-norte.svg'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <img
            className={`img-fluid ${styles.logo}`}
            src={logo}
            alt='logo central norte footer'
          />
          <div className={`${styles.data} col-md-12`}>
            DIRECCIÓN: Carlos Villate 5698, B1605 Munro, Provincia de Buenos
            Aires. <br />
            TELÉFONO: 011 3 653 7605 <br />
            EMAIL: info@centralnortesrl.com
          </div>
        </div>
        <div className='row'>
          <div className={`col-md-12 ${styles.content_libre}`}>
            <p className={`${styles.libre}`}>By Libre Comunicación</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
