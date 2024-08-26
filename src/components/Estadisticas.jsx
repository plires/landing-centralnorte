import Titles from '@/components/Titles'
import { Flat } from '@alptugidin/react-circular-progress-bar/'

import styles from './estadisticas.module.css'

const Estadisticas = () => {
  return (
    <section className={`${styles.estadisticas}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Titles title='Generá impacto' />
          </div>
          <div className='col-4'>
            <article className={`${styles.content_all}`}>
              <div className={`${styles.content_circle}`}>
                <Flat
                  progress={85}
                  sx={{
                    strokeColor: '#623cea',
                    barWidth: 7,
                    valueSize: 26,
                    loadingTime: 1000,
                    valueWeight: 'bold',
                    valueColor: '#5ce394',
                    miniCircleColor: '#623cea',
                    valueAnimation: true,
                    intersectionEnabled: true,
                  }}
                />
              </div>
              <p>
                Recuerda la empresa <br />
                que le regalo un producto <br />
                promocional
              </p>
            </article>
          </div>
          <div className='col-4'>
            <article className={`${styles.content_all}`}>
              <div className={`${styles.content_circle}`}>
                <Flat
                  progress={75}
                  sx={{
                    strokeColor: '#623cea',
                    barWidth: 7,
                    valueSize: 26,
                    loadingTime: 1000,
                    valueWeight: 'bold',
                    valueColor: '#5ce394',
                    miniCircleColor: '#623cea',
                    valueAnimation: true,
                    intersectionEnabled: true,
                  }}
                />
              </div>
              <p>
                Conserva el artículo <br />
                durante al menos <br />
                un año
              </p>
            </article>
          </div>
          <div className='col-4'>
            <article className={`${styles.content_all}`}>
              <div className={`${styles.content_circle}`}>
                <Flat
                  progress={50}
                  sx={{
                    strokeColor: '#623cea',
                    barWidth: 7,
                    valueSize: 26,
                    loadingTime: 1000,
                    valueWeight: 'bold',
                    valueColor: '#5ce394',
                    miniCircleColor: '#623cea',
                    valueAnimation: true,
                    intersectionEnabled: true,
                  }}
                />
              </div>
              <p>
                Usa el producto <br />
                más de una vez <br />
                por semana
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estadisticas
