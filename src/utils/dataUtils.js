import { useContext } from 'react'
import slidesPrincipal from './../data/slidePrincipal.json'
import slidesSecundarioSuperior from './../data/slideSecundarioSuperior.json'
import slidesSecundarioInferior from './../data/slideSecundarioInferior.json'
import kitsOne from './../data/kits-one.json'
import kitsTwo from './../data/kits-two.json'
import featuredProducts from './../data/featuredProducts.json'
import resenas from './../data/resenas.json'

export const getSlidesPrincipal = key => slidesPrincipal[key]
export const getSlidesSecundarioSuperior = key => slidesSecundarioSuperior[key]
export const getSlidesSecundarioInferior = key => slidesSecundarioInferior[key]
export const getKitsOne = key => kitsOne[key]
export const getKitsTwo = key => kitsTwo[key]
export const getFeaturedProducts = key => featuredProducts[key]
export const getResenas = key => resenas[key]

export const getCurrentMonth = () => {
  const date = new Date()
  const month = date.toLocaleString('es-AR', { month: 'long' })
  return month
}

export const scrollToTop = (
  product = null,
  setMessage,
  isPromo,
  msg = null,
  textAreaRef,
) => {
  if (msg) {
    setMessage(msg)
  } else {
    const msgPromo = isPromo
      ? `Quiero consultar por el producto ${product}, que se encuentra en promoción...`
      : `Necesito hacer una consulta por el producto ${product}`
    setMessage(msgPromo)
  }

  window.scroll({
    top: 350,
    left: 0,
    behavior: 'smooth',
  })

  setTimeout(() => {
    textAreaRef.focus()
  }, 500)
}

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu consulta'
  }
  return errors
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
