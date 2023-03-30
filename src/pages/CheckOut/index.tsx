import { CreditCard, CurrencyBtc, MapPinLine, Money } from 'phosphor-react'
import {
  AddressFormContainer,
  Calculations,
  CartContainer,
  CheckoutContainer,
  ItemList,
  ItemSeparator,
  PageContainer,
  PaymentMethodContainer,
} from './styles'
import { CartItem } from './components/CartItem'
import { useState } from 'react'
import { Product } from '../Home'
import AmericanoPicture from '../../assets/Americano.png'
import TradPicture from '../../assets/TradExpresso.png'
import CreamyPicture from '../../assets/ExpressoCremoso.png'

interface CartEntry {
  quantity: number
  product: Product
}

export function CheckOut() {
  const [cart, setCart] = useState<CartEntry[]>([
    {
      quantity: 1,
      product: {
        id: 1,
        name: 'Traditional Expresso',
        description: 'Coffee made with hot water and grounded coffee beans',
        tags: [{ name: 'Traditional' }],
        image: TradPicture,
        price: 990,
      },
    },
    {
      quantity: 2,
      product: {
        id: 2,
        name: 'Expresso Americano',
        description: 'Diluted Expresso, less intense than the Traditional',
        tags: [{ name: 'Traditional' }],
        image: AmericanoPicture,
        price: 990,
      },
    },
    {
      quantity: 2,
      product: {
        id: 3,
        name: 'Creamy Expresso',
        description: 'Traditional Expresso with creamy foam',
        tags: [{ name: 'Traditional' }],
        image: CreamyPicture,
        price: 990,
      },
    },
  ])

  return (
    <PageContainer>
      <CheckoutContainer>
        <h4>Complete your request</h4>
        <AddressFormContainer>
          <div>
            <MapPinLine size={24} />
            <span>
              <span>Delivery Address</span>
              <p>Tell us where you wan the foccee to be delivered to</p>
            </span>
          </div>

          <form action="">
            <input type="text" placeholder="VAT" />
            <input type="text" placeholder="Street" />
            <input type="text" placeholder="Street-number" />
            <input type="text" placeholder="Street-complement" />
            <input type="text" placeholder="Postal Code" />
            <input type="text" placeholder="City" />
          </form>
        </AddressFormContainer>

        <PaymentMethodContainer>
          <div>
            <CurrencyBtc size={24} />
            <span>
              <span>Payment Method</span>
              <p>
                We recieve your payment on delivery. Select your favorite
                payment method
              </p>
            </span>
          </div>

          <div>
            <button>
              <CurrencyBtc size={20} /> Bitcoin
            </button>
            <button>
              <CreditCard size={20} /> Card
            </button>
            <button>
              <Money size={20} /> Cash
            </button>
          </div>
        </PaymentMethodContainer>
      </CheckoutContainer>

      <div>
        <h4>Coffees Selected</h4>
        <CartContainer>
          <ItemList>
            {cart.map((entry) => {
              return (
                <>
                  <CartItem
                    image={entry.product.image}
                    name={entry.product.name}
                    price={entry.product.price}
                    quantity={entry.quantity}
                    key={entry.product.id}
                  />
                  <ItemSeparator />
                </>
              )
            })}
          </ItemList>
          <Calculations>
            {/* Totals Calculations */}
            <div>
              <div>Total items</div>
              <div>€100</div>
            </div>
            <div>
              <div>delivery</div>
              <div>€23</div>
            </div>
            <div>
              <div>Total</div>
              <div>€123</div>
            </div>
          </Calculations>
          <button>Confirm Request</button>
        </CartContainer>
      </div>
    </PageContainer>
  )
}
