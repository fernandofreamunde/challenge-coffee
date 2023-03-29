import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemContainer, QuantityController } from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <img
        src="https://ui-avatars.com/api/?size=100&name=Marcus+Aurelius"
        alt=""
      />
      <div>
        <p>Product Name </p>
        <div>
          <QuantityController>
            <span>
              <Minus size={14} weight="bold" />
            </span>
            {1}
            <span>
              <Plus size={14} weight="bold" />
            </span>
          </QuantityController>
          <button>
            <Trash size={22} /> <span>Remove</span>
          </button>
        </div>
      </div>
      <div>€ 9.99</div>
    </CartItemContainer>
  )
}
