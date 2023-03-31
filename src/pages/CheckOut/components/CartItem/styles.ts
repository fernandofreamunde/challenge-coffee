import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 23rem;
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  img {
    width: 4rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;

    div {
      display: flex;
      gap: 0.5rem;
      flex-direction: row;

      button {
        border: 0;
        margin: 0;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        border-radius: 6px;
        padding: 0.5rem;
        background-color: ${(props) => props.theme['base-button']};

        color: ${(props) => props.theme['purple-base']};
        span {
          color: ${(props) => props.theme['base-text']};
          text-transform: uppercase;
          font-weight: 400;
          font-size: 0.85rem;
        }

        &:hover {
          background-color: ${(props) => props.theme['base-hover']};
        }
      }
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  div + div {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const QuantityController = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};

  span {
    color: ${(props) => props.theme['purple-base']};
  }
`
