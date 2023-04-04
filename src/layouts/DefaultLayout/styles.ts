import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;

  background-color: ${(props) => props.theme['base-bg']};
  z-index: 10;

  div {
    max-width: 90rem;
    margin: 0 auto;
    padding: 2em 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Wrapper = styled.div`
  max-width: 90rem;
  padding: 6.75rem 0 10rem;
  margin: 0 auto;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationSelector = styled.span`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-base']};
  }
`

export const CartButton = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  position: :relative;
`

export const Badge = styled.span`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  position: absolute;
  border-radius: 9999999px;
  padding: 0.25rem;
  height: 1.25rem;
  width: 1.25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  right: 18.5rem;
  top: 1.75rem;

  font-size: 0.65rem;
`
