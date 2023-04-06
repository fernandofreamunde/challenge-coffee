import { CurrencyBtc, MapPinLine } from 'phosphor-react'
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
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { PaymentSelector } from './components/PaymentSelector'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  vatNumber: zod.string().min(1),
  street: zod.string().min(1),
  streetNumber: zod.string().min(1),
  streetNumberComplement: zod.string().optional(),
  postalCode: zod.string().min(4),
  city: zod.string().min(1),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckOut() {
  const { cart, setOrder } = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('bitcoin')
  const navigate = useNavigate()

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

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit, reset, register } = checkoutForm

  function handleConfirmCheckout(data: CheckoutFormData) {
    const order = {
      cart,
      address: data,
      paymentMethod,
    }

    setOrder(order)

    navigate('/confirmation')
    reset()
  }

  function handleSelectPaymentMethod(value: string) {
    setPaymentMethod(value)
  }

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

          <form
            id="checkoutForm"
            onSubmit={handleSubmit(handleConfirmCheckout)}
            action=""
          >
            <FormProvider {...checkoutForm}>
              <input
                type="text"
                placeholder="VAT Number"
                {...register('vatNumber')}
              />
              <input type="text" placeholder="Street" {...register('street')} />
              <div>
                <input
                  type="text"
                  placeholder="Street-number"
                  {...register('streetNumber')}
                />
                <input
                  type="text"
                  placeholder="Street-complement"
                  {...register('streetNumberComplement')}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Postal Code"
                  {...register('postalCode')}
                />
                <input type="text" placeholder="City" {...register('city')} />
              </div>
            </FormProvider>
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
            <PaymentSelector
              onTriger={handleSelectPaymentMethod}
              value="bitcoin"
              selected={paymentMethod === 'bitcoin'}
            />
            <PaymentSelector
              onTriger={handleSelectPaymentMethod}
              value="card"
              selected={paymentMethod === 'card'}
            />
            <PaymentSelector
              onTriger={handleSelectPaymentMethod}
              value="cash"
              selected={paymentMethod === 'cash'}
            />
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
          <input type="submit" form="checkoutForm" value="Confirm Request" />
        </CartContainer>
      </div>
    </PageContainer>
  )
}
