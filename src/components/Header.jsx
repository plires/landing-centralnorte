import { useEffect, useRef, useState } from 'react'
import logoCentral from '@/assets/img/logo-central-norte.svg'
import logoCentralSmall from '@/assets/img/logo-small-central-norte.svg'

import './header.css'

const Header = () => {
  const [logo, setLogo] = useState(logoCentral)

  const headerElement = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoCentralSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoCentral)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition' ref={headerElement}>
      <div className='content_logo transition'>
        <img className='img-fluid' src={logo} alt='logo depisos.com' />
      </div>
    </header>
  )
}

export default Header
