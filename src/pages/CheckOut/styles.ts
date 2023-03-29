import styled from 'styled-components'

export const PageContainer = styled.main`
  border: blue solid 1px;
  max-width: 90rem;
  padding: 2rem 8rem;

  display: flex;
  gap: 2rem;
`

export const CartContainer = styled.div`
  margin-top: 1rem;
  width: 28rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  button {
    border: 0;
    padding: 1rem;
    width: 100%;
    border-radius: 6px;
    margin-top: 1.5rem;

    font-weight: bold;
    text-transform: uppercase;

    background: ${(props) => props.theme['yellow-base']};
    color: ${(props) => props.theme.white};
  }
`

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`
export const ItemSeparator = styled.div`
  margin: 1.5rem 0;
  border: solid 1px ${(props) => props.theme['base-button']};
`
export const Calculations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div + div + div {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const CheckoutContainer = styled.div`
  border: red solid 1px;
`

export const AddressFormContainer = styled.div`
  border: green solid 1px;
`

export const PaymentMethodContainer = styled.div`
  border: limeGreen solid 1px;
`
