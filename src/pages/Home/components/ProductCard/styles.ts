import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -2.5rem;
    width: 120px;
  }

  span {
    display: flex;
    gap: 0.25rem;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 130%;
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }
`
export const ProductTag = styled.span`
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const ProductPrice = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  justify-content: space-between;

  padding: 0rem 0.5rem;
`

export const PriceTag = styled.div`
  max-width: 82px;
  min-width: 62px;

  span {
    font-size: 0.875rem;
  }

  h5 {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.5rem;
    display: inline;
  }
`

export const CartController = styled.div`
  width: 118px;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    button {
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['purple-dark']};
      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    }
  }

  input {
    border: 0;
    max-width 3rem;
    display: inline;
  }

  button {
    background-color: ${(props) => props.theme['purple-dark']};
    border: 0;
    color: ${(props) => props.theme.white};

    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
  
    &:hover {
      background-color: ${(props) => props.theme['purple-base']};
    }
  }
`
