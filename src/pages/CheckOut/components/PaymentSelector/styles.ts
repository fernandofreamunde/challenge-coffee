import styled from 'styled-components'

export const PaymentMethodButton = styled.button`
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

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-base']};
    border: 1px solid ${(props) => props.theme['purple-base']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-base']};
    :hover {
      background-color: ${(props) => props.theme['purple-light']};
    }
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
