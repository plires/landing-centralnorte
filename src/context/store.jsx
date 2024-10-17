import { createContext, useState, useRef } from 'react'

export const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [isPromo, setIsPromo] = useState(
    import.meta.env.VITE_IS_PROMO === 'true',
  )
  const [message, setMessage] = useState('')
  const textAreaRef = useRef(null)
  return (
    <StoreContext.Provider
      value={{
        isPromo,
        setIsPromo,
        message,
        setMessage,
        textAreaRef,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
