import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemContainer, QuantityController } from './styles'

interface CartItemProps {
  image: string
  name: string
  quantity: number
  price: number
}

export function CartItem({ image, name, price, quantity }: CartItemProps) {
  return (
    <CartItemContainer>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <div>
          <QuantityController>
            <span>
              <Minus size={14} weight="bold" />
            </span>
            {quantity}
            <span>
              <Plus size={14} weight="bold" />
            </span>
          </QuantityController>
          <button>
            <Trash size={22} /> <span>Remove</span>
          </button>
        </div>
      </div>
      <div>€ {String(price / 100).padEnd(4, '0')}</div>
    </CartItemContainer>
  )
}
