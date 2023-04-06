import { CartEntryPayload, Product } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
  EMPTY_CART = 'EMPTY_CART',
}

export function addItemToCart(cartEntry: CartEntryPayload) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: cartEntry,
  }
}

export function changeQuantityOfItemInCart(cartEntry: CartEntryPayload) {
  return {
    type: ActionTypes.CHANGE_ITEM_QUANTITY,
    payload: cartEntry,
  }
}

export function removeItemFromCart(product: Product) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: product,
  }
}

export function emptyCart() {
  return {
    type: ActionTypes.EMPTY_CART,
    payload: '',
  }
}
