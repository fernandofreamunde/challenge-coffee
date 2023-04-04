import { NavLink, Outlet } from 'react-router-dom'
import {
  Badge,
  CartButton,
  HeaderContainer,
  LocationSelector,
  Nav,
  Wrapper,
} from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function DefaultLayout() {
  const { cart } = useContext(CartContext)

  const badCounter = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

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
                {badCounter > 0 ? <Badge>{badCounter}</Badge> : ''}
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
