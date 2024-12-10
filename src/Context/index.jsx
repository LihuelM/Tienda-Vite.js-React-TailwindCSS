import { createContext, useState } from "react";

export const ShopppingCartContext = createContext()

export const ShopppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)

  return(
    <ShopppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShopppingCartContext.Provider>
  )
}