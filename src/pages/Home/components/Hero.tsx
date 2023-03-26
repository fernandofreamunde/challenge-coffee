import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeCup from '../../../assets/CoffeeCup.png'
import {
  ShoppingCartPoint,
  HeroContainer,
  Right,
  PackagePoint,
  CoffeePoint,
  TimerPoint,
  Pointer,
  PointerBox,
  ImageHolder,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <Right>
        <div>
          <h1>Find the perfect coffee at any time of the day</h1>
          <p>
            With Coffee Delivery you can get your coffee wherever you are, no
            matter the time
          </p>
        </div>

        <PointerBox>
          <Pointer>
            <ShoppingCartPoint>
              <ShoppingCart size={22} weight="fill" />
            </ShoppingCartPoint>
            <p>simple and safe purchase</p>
          </Pointer>
          <Pointer>
            <PackagePoint>
              <Package size={22} weight="fill" />
            </PackagePoint>
            <p>Our package keeps the coffee intact</p>
          </Pointer>
          <Pointer>
            <TimerPoint>
              <Timer size={22} weight="fill" />
            </TimerPoint>
            <p>Fast and tracked delivery</p>
          </Pointer>
          <Pointer>
            <CoffeePoint>
              <Coffee size={22} weight="fill" />
            </CoffeePoint>
            <p>Coffee arrives Fresh to you</p>
          </Pointer>
        </PointerBox>
      </Right>

      <ImageHolder>
        <img src={coffeeCup} alt="" />
      </ImageHolder>
    </HeroContainer>
  )
}
