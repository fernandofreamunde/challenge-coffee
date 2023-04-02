import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemContainer, QntButton, QuantityController } from './styles'
import { Product } from '../../../Home'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CartItemProps {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeProduct } =
    useContext(CartContext)

  // time to use reducers intead of this hack
  const [amount, setAmount] = useState(quantity)

  function handlePlus() {
    const result = amount + 1
    setAmount(result)
    increaseQuantity(product)
  }

  function handleMinus() {
    const result = amount - 1
    setAmount(result < 1 ? 1 : result)
    decreaseQuantity(product)
  }

  function handleRemove() {
    removeProduct(product)
  }

  return (
    <CartItemContainer>
      <img src={product.image} alt="" />
      <div>
        <p>{product.name}</p>
        <div>
          <QuantityController>
            <QntButton onClick={handleMinus}>
              <Minus size={14} weight="bold" />
            </QntButton>
            {amount}
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
  )
}
