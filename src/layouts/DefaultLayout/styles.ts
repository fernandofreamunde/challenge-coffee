import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme['base-bg']};
`
export const GhostContainer = styled.header`
  padding-top: 6.75rem;

  width: 100%;
  background-color: transparent;
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
  gap: 0.5rem;
`
