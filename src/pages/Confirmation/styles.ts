import styled from 'styled-components'

export const ConfirmationContainer = styled.main`
  max-width: 90rem;
  padding: 2rem 8rem;

  display: flex;

  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }

  img {
    margin-top 7.5rem;
  }
`

export const TextBox = styled.div`
  margin-top: 2.5rem;

  border-radius: 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme['base-bg']},
        ${(props) => props.theme['base-bg']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-base']},
        ${(props) => props.theme['purple-base']}
      )
      border-box;
  border: 1px solid transparent;

  padding: 2.5rem;
  width: 32.875rem;

  display: grid;
  grid-template-columns: 2.75rem auto;
  grid-row-gap: 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

const BasePoint = styled.span`
  border-radius: 50%;
  padding: 0.5rem;

  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.white};
`

export const DeliveryPoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['purple-base']};
`
export const TimerPoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['yellow-base']};
`
export const MoneyPoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
