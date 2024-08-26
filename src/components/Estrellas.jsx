import star from '@/assets/img/estrella.png'

import styles from './estrellas.module.css'

const Estrellas = ({ resena }) => {
  let node = ''
  let element = ''

  for (let i = 0; i < resena.value; i++) {
    node = `<img class='${styles.estrella}' src='${star}' alt='${resena.id + ' - ' + resena.name} - estrella numero ${i}' />`
    element = element + node
  }

  return (
    <div
      className={`${styles.content_stars}`}
      dangerouslySetInnerHTML={{ __html: element }}
    />
  )
}
export default Estrellas
