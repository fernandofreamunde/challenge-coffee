import { ReactNode, createContext, useReducer } from 'react'
import { CartReducer, Product } from '../reducers/cart/reducer'
import {
  addItemToCart,
  changeQuantityOfItemInCart,
  removeItemFromCart,
} from '../reducers/cart/actions'

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
  const [cartState, dispatch] = useReducer(CartReducer, { cart: [] })
  const { cart } = cartState

  function addEntryToCart(data: CartEntry) {
    const index = cart.findIndex((item) => {
      return item.product === data.product
    })

    if (index === -1) {
      dispatch(addItemToCart(data))
      return
    }

    increaseQuantity(data.product)
  }

  function increaseQuantity(product: Product) {
    const index = cart.findIndex((item) => {
      return item.product === product
    })

    let { quantity } = cart[index]

    quantity = quantity + 1
    dispatch(changeQuantityOfItemInCart({ product, quantity }))
  }

  function decreaseQuantity(product: Product) {
    const index = cart.findIndex((item) => {
      return item.product === product
    })

    let { quantity } = cart[index]

    quantity = quantity - 1
    if (quantity !== 0) {
      dispatch(changeQuantityOfItemInCart({ product, quantity }))
    }
  }

  function removeProduct(product: Product) {
    dispatch(removeItemFromCart(product))
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
