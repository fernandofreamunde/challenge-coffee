import { NavLink, Outlet } from 'react-router-dom'
import {
  CartButton,
  HeaderContainer,
  LocationSelector,
  Nav,
  Wrapper,
} from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function DefaultLayout() {
  return (
    <div>
      <HeaderContainer>
        <div>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>

          <Nav>
            <LocationSelector>
              <MapPin size={22} weight="fill" /> Porto Alegre, RS
            </LocationSelector>
            <NavLink to="checkout">
              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </NavLink>
          </Nav>
        </div>
      </HeaderContainer>

      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  )
}
