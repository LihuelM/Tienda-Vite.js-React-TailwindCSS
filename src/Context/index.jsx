import { createContext, useState } from "react";

export const ShopppingCartContext = createContext()

export const ShopppingCartProvider = ({children}) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0)

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  //Product Detail- Show product
  const [productToShow, setProductToShow] = useState(false)

  return(
    <ShopppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail
    }}>
      {children}
    </ShopppingCartContext.Provider>
  )
}