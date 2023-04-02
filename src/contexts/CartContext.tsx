import { ReactNode, createContext, useState } from 'react'
import { Product } from '../pages/Home'

export interface CartEntry {
  quantity: number
  product: Product
}

interface CartContextType {
  cart: CartEntry[]
  addEntryToCart: (data: CartEntry) => void
  increaseQuantity: (product: Product) => void
  decreaseQuantity: (product: Product) => void
  removeProduct: (product: Product) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartEntry[]>([]) // replace with reducers?

  function addEntryToCart(data: CartEntry) {
    setCart([...cart, data])
  }

  function increaseQuantity(product: Product) {
    const index = cart.findIndex((item) => {
      return item.product === product
    })

    cart[index].quantity += 1
    setCart(cart)
  }

  function decreaseQuantity(product: Product) {
    const index = cart.findIndex((item) => {
      return item.product === product
    })

    cart[index].quantity -= 1
    setCart(cart)
  }

  function removeProduct(product: Product) {
    const newCart = cart.filter((item) => {
      return item.product !== product
    })

    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addEntryToCart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
