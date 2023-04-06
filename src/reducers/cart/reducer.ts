import produce from 'immer'
import { ActionTypes } from './actions'

export interface ProductTag {
  name: string
}

export interface Product {
  id: number
  name: string
  description: string
  tags: ProductTag[]
  image: string
  price: number
}

export interface CartEntryPayload {
  quantity: number
  product: Product
}

interface CartState {
  cart: CartEntryPayload[]
}

interface StateAction {
  type: ActionTypes
  payload: any
}

export function CartReducer(state: CartState, action: StateAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload)
      })

    case ActionTypes.CHANGE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const index = state.cart.findIndex((item) => {
          return item.product.id === action.payload.product.id
        })

        if (index < 0) {
          return state
        }

        draft.cart[index] = action.payload
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        const index = state.cart.findIndex((item) => {
          return item.product.id === action.payload.id
        })

        if (index < 0) {
          return state
        }

        draft.cart.splice(index, 1)
      })

    case ActionTypes.EMPTY_CART:
      return produce(state, (draft) => {
        draft.cart = []
      })

    default:
      return state
  }
}
