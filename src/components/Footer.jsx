import logo from '@/assets/img/logo-central-norte.svg'
import { scrollToTop } from '@/utils/dataUtils.js'
import { useContext } from 'react'
import { StoreContext } from '../context/store'

import styles from './footer.module.css'

const Footer = () => {
  const { setMessage, isPromo, textAreaRef } = useContext(StoreContext)

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
            <span
              className='transition'
              onClick={() =>
                scrollToTop(
                  null,
                  setMessage,
                  isPromo,
                  'Necesito más información...',
                  textAreaRef.current,
                )
              }
            >
              EMAIL: {import.meta.env.VITE_MAIL_CONTACTO}
            </span>
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
