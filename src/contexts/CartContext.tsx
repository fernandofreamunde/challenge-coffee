import { ReactNode, createContext, useReducer, useState } from 'react'
import { CartReducer, Product } from '../reducers/cart/reducer'
import {
  addItemToCart,
  changeQuantityOfItemInCart,
  emptyCart,
  removeItemFromCart,
} from '../reducers/cart/actions'
import { CheckoutFormData } from '../pages/CheckOut'

export interface CartEntry {
  quantity: number
  product: Product
}

export interface Order {
  cart: CartEntry[]
  address: CheckoutFormData
  paymentMethod: string
}

interface CartContextType {
  order: Order
  cart: CartEntry[]
  addEntryToCart: (data: CartEntry) => void
  increaseQuantity: (product: Product) => void
  decreaseQuantity: (product: Product) => void
  removeProduct: (product: Product) => void
  setOrder: (order: Order) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, { cart: [] })
  const { cart } = cartState
  const [order, setOrder] = useState({} as Order)

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

  function clearCart() {
    dispatch(emptyCart())
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
        order,
        setOrder,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
