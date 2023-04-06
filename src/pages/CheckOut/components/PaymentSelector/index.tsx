import { CreditCard, CurrencyBtc, Money } from 'phosphor-react'
import { PaymentMethodButton } from './styles'

interface PaymentSelectorProps {
  value: 'card' | 'bitcoin' | 'cash'
  selected?: boolean
  onTriger: (value: string) => void
}

export function PaymentSelector({
  value,
  selected = false,
  onTriger,
}: PaymentSelectorProps) {
  function handleClick() {
    onTriger(value)
  }

  return (
    <PaymentMethodButton disabled={selected} onClick={handleClick}>
      {value === 'bitcoin' ? (
        <CurrencyBtc size={20} />
      ) : value === 'card' ? (
        <CreditCard size={20} />
      ) : (
        <Money size={20} />
      )}
      {value}
    </PaymentMethodButton>
  )
}
