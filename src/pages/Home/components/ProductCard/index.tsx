import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Product } from '../..'
import {
  CartController,
  PriceTag,
  ProductCardContainer,
  ProductInfo,
  ProductPrice,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface ProductCardPorps {
  product: Product
}

export function ProductCard({ product }: ProductCardPorps) {
  const { addEntryToCart } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function handlePlus() {
    const result = amount + 1
    setAmount(result)
  }
  function handleMinus() {
    const result = amount - 1
    setAmount(result < 1 ? 1 : result)
  }
  function handleAddToCart() {
    addEntryToCart({ product, quantity: amount })
    setAmount(1)
  }

  return (
    <ProductCardContainer>
      <ProductInfo>
        <img src={product.image} alt="" />
        <span>
          {product.tags.map((tag) => {
            return <span key={tag.name}>{tag.name}</span>
          })}
        </span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </ProductInfo>

      <ProductPrice>
        <PriceTag>
          <span>€</span> <h5>{String(product.price / 100).padEnd(4, '0')}</h5>
        </PriceTag>
        <CartController>
          <div>
            <span onClick={handleMinus}>
              <Minus size={14} />
            </span>
            {amount}
            <span onClick={handlePlus}>
              <Plus size={14} />
            </span>
          </div>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CartController>
      </ProductPrice>
    </ProductCardContainer>
  )
}
