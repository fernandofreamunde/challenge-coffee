import styled from 'styled-components'

export const PageContainer = styled.main`
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

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
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
  width: 100%;
`

export const AddressFormContainer = styled.div`
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  p {
    font-size: 0.875rem;
  }

  div:nth-child(1) {
    /* border: red 1px solid; */
    display: grid;
    grid-template-columns: 1.5rem auto;
    grid-column-gap: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items; flex:start;
    gap: 1rem;
    flex-wrap: wrap;

    input {
      border: 0;
      padding: 0.75rem;
      border-radius: 6px;
      border: solid 1px ${(props) => props.theme['base-button']};
      background-color: ${(props) => props.theme['base-input']};
    }

    input:nth-child(1) {
      width: 12.5rem;
    }

    div {
      display: flex;
      gap: .75rem;

      input { 
        flex-grow: 1;
      }
    }
    
  }
`

export const PaymentMethodContainer = styled.div`
  margin-top: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  p {
    font-size: 0.875rem;
  }

  div:nth-child(1) {
    /* border: red 1px solid; */
    display: grid;
    grid-template-columns: 1.5rem auto;
    grid-column-gap: 0.5rem;
    color: ${(props) => props.theme['purple-base']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  div + div {
    margin-top: 2rem;
    display: flex;
    gap: 0.75rem;

    button {
      display: flex;
      border: 0;
      background-color: ${(props) => props.theme['base-button']};
      padding: 1rem;
      width: 100%;
      border-radius: 6px;
      gap: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};

      svg {
        color: ${(props) => props.theme['purple-base']};
      }

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    }
  }
`
