import Header from './components/Header'
import Slide from './components/Slide'
import Formulario from './components/Formulario'
import Caracteristicas from './components/Caracteristicas'
import Kits from './components/Kits'
import Estadisticas from './components/Estadisticas'
import NuestrosServicios from './components/NuestrosServicios'
import FeaturedProducts from './components/FeaturedProducts'
import Reviews from './components/Reviews'
import Muestras from './components/Muestras'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

import { getKitsOne, getKitsTwo } from '@/utils/dataUtils.js'

function App() {
  const kitsOne = getKitsOne('kitsOne')
  const kitsTwo = getKitsTwo('kitsTwo')

  return (
    <main>
      <Whatsapp />
      <Header />
      <Slide />
      <Formulario />
      <Kits
        data={kitsOne}
        title='¿Te interesa alguno de nuestros Kits personalizados?'
        description='Selecciona cual y te contamos como lo adaptamos'
      />
      <Caracteristicas />
      <NuestrosServicios />
      <FeaturedProducts />
      <Estadisticas />
      <Reviews />
      <Kits data={kitsTwo} title='Encontrá el Kit perfecto para vos' />
      <Muestras />
      <Footer />
    </main>
  )
}

export default App
