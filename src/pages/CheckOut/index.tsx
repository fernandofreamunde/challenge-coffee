import { CreditCard, CurrencyBtc, MapPinLine, Money } from 'phosphor-react'
import {
  AddressFormContainer,
  Calculations,
  CartContainer,
  CheckoutContainer,
  ItemList,
  PageContainer,
  PaymentMethodContainer,
} from './styles'
import { CartItem } from './components/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CheckOut() {
  const { cart } = useContext(CartContext)

  const deliveryFee = 350
  const productTotal = cart.reduce((total, item) => {
    return total + item.quantity * item.product.price
  }, 0)
  const orderTotal = productTotal + deliveryFee

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  })

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
                <CartItem
                  key={entry.product.id}
                  product={entry.product}
                  quantity={entry.quantity}
                />
              )
            })}
          </ItemList>
          <Calculations>
            {/* Totals Calculations */}
            <div>
              <div>Total items</div>
              <div>{formatter.format(productTotal / 100)}</div>
            </div>
            <div>
              <div>delivery</div>
              <div>{formatter.format(deliveryFee / 100)}</div>
            </div>
            <div>
              <div>Total</div>
              <div>{formatter.format(orderTotal / 100)}</div>
            </div>
          </Calculations>
          <button>Confirm Request</button>
        </CartContainer>
      </div>
    </PageContainer>
  )
}
