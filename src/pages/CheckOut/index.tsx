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
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CheckOut() {
  const { cart } = useContext(CartContext)

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
            <input type="text" placeholder="VAT Number" />
            <input type="text" placeholder="Street" />
            <div>
              <input type="text" placeholder="Street-number" />
              <input type="text" placeholder="Street-complement" />
            </div>

            <div>
              <input type="text" placeholder="Postal Code" />
              <input type="text" placeholder="City" />
            </div>
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
                    key={entry.product.id}
                    product={entry.product}
                    quantity={entry.quantity}
                  />
                  <ItemSeparator key={cart.indexOf(entry)} />
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
