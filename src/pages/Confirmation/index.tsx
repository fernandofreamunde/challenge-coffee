import { CurrencyBtc, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.png'
import {
  ConfirmationContainer,
  DeliveryPoint,
  MoneyPoint,
  TextBox,
  TimerPoint,
} from './styles'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Confirmation() {
  const { clearCart, order } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <ConfirmationContainer>
      <div>
        <h1>Woho! Request Confirmed</h1>
        <p>Now just stay put your coffee is on its way</p>
        <TextBox>
          <DeliveryPoint>
            <MapPin weight="fill" />
          </DeliveryPoint>
          <span>
            <p>
              Delivery to{' '}
              <strong>
                {order.address.street} {order.address.streetNumber}
                {order.address.streetNumberComplement
                  ? ` - ${order.address.streetNumberComplement}`
                  : ''}
              </strong>
            </p>
            <p>
              {order.address.postalCode} - {order.address.city}
            </p>
          </span>

          <TimerPoint>
            <Timer weight="fill" />
          </TimerPoint>
          <span>
            <p>Estimated Delivery time</p>
            <p>
              <strong>10 min - 20 min</strong>
            </p>
          </span>

          <MoneyPoint>
            <CurrencyBtc />
          </MoneyPoint>
          <span>
            <p>Payment on Delivery</p>
            <p>
              <strong>{order.paymentMethod}</strong>
            </p>
          </span>
        </TextBox>
      </div>

      <div>
        <img src={illustration} alt="" />
      </div>
    </ConfirmationContainer>
  )
}
