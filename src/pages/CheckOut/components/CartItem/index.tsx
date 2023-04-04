import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { ItemSeparator } from '../../styles'
import { Product } from '../../../../reducers/cart/reducer'
import { CartItemContainer, QntButton, QuantityController } from './styles'

interface CartItemProps {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeProduct } =
    useContext(CartContext)

  function handlePlus() {
    increaseQuantity(product)
  }

  function handleMinus() {
    decreaseQuantity(product)
  }

  function handleRemove() {
    removeProduct(product)
  }

  return (
    <>
      <CartItemContainer>
        <img src={product.image} alt="" />
        <div>
          <p>{product.name}</p>
          <div>
            <QuantityController>
              <QntButton onClick={handleMinus}>
                <Minus size={14} weight="bold" />
              </QntButton>
              {quantity}
              <QntButton onClick={handlePlus}>
                <Plus size={14} weight="bold" />
              </QntButton>
            </QuantityController>
            <button onClick={handleRemove}>
              <Trash size={22} /> <span>Remove</span>
            </button>
          </div>
        </div>
        <div>€ {String(product.price / 100).padEnd(4, '0')}</div>
      </CartItemContainer>
      <ItemSeparator />
    </>
  )
}
