import { useState } from 'react'
import logoWhatsapp from '@/assets/img/whatsapp.png'
import close from '@/assets/img/close.png'

import './whatsapp.css'

const Whatsapp = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(true)

  const handleWhatsappState = () => {
    setWhatsappOpen(!whatsappOpen)
  }

  if (whatsappOpen) {
    return (
      <>
        <section id='seguidor' className='text-center'>
          <button id='cerrar-seguidor' style={{ color: '#000000' }}>
            <img
              className='transition'
              width='20'
              height='20'
              src={close}
              onClick={() => handleWhatsappState()}
              alt='close'
            />
          </button>

          <hr style={{ margin: '10px 0' }} />

          <div className='click-to-call-mobile'>
            <img src={logoWhatsapp} alt='whatsapp' />
          </div>

          <h6>
            <strong>¡CONSULTÁ POR WHATSAPP!</strong>
          </h6>
          <a
            id='whatsapp_desktop'
            href={import.meta.env.VITE_LINK_TO_WHATSAPP}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-wap'
          >
            CHAT
          </a>
        </section>

        <section id='seguidor-tel' className='text-center'>
          <div className='tex-right'>
            <button id='cerrar-seguidor-tel' style={{ color: '#000000' }}>
              <img
                className='transition'
                width='20'
                height='20'
                src={close}
                onClick={() => handleWhatsappState()}
                alt='close'
              />
            </button>
          </div>

          <a
            id='whatsapp_mobile'
            className='transition'
            href={import.meta.env.VITE_LINK_TO_WHATSAPP}
            target='_blank'
            rel='noopener noreferrer'
          >
            ¡CONSULTÁ POR <br /> WHATSAPP!
          </a>
        </section>
      </>
    )
  } else {
    return null
  }
}
export default Whatsapp
