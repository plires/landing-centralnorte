import { useContext } from 'react'
import { StoreContext } from '../context/store'

import isoLogo from '@/assets/img/logo-fondo2.svg'
import { scrollToTop } from './../utils/dataUtils'

import styles from './content-data.module.css'

const ContentData = ({ frase, message, textButton }) => {
  const { setMessage, isPromo, textAreaRef } = useContext(StoreContext)

  return (
    <>
      <img
        data-aos='fade-up'
        className={`${styles.isologo}`}
        src={isoLogo}
        alt='logo central norte - servicios'
      />
      <p data-aos='fade-up' className={`${styles.frase}`}>
        {frase}
      </p>
      <button
        data-aos='fade-up'
        className={`${styles.boton} btn`}
        onClick={() =>
          scrollToTop(null, setMessage, isPromo, message, textAreaRef.current)
        }
      >
        {textButton}
      </button>
    </>
  )
}
export default ContentData
