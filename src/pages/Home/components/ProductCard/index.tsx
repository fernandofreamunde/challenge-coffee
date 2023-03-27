import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Product } from '../..'
import {
  CartController,
  PriceTag,
  ProductCardContainer,
  ProductInfo,
  ProductPrice,
} from './styles'
import { useState } from 'react'

interface ProductCardPorps {
  product: Product
}
export function ProductCard({ product }: ProductCardPorps) {
  const [amount, setAmount] = useState(1)

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
            <span>
              <Minus size={14} />
            </span>
            {amount}
            <span>
              <Plus size={14} />
            </span>
          </div>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CartController>
      </ProductPrice>
    </ProductCardContainer>
  )
}
