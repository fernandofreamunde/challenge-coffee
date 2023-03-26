import styled from 'styled-components'
import heroBg from '../../../assets/Background.svg'

export const HeroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 5rem;
  background-image: url(${heroBg});

  display: flex;
  justify-content: space-evenly;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  max-width: 40rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const PointerBox = styled.div`
  display: grid;
  grid-template-columns: 280px 340px;
  grid-row: auto auto;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
`

export const Pointer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    margin-top: 0rem;
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

export const ShoppingCartPoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const PackagePoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['base-text']};
`

export const TimerPoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['yellow-base']};
`

export const CoffeePoint = styled(BasePoint)`
  background-color: ${(props) => props.theme['purple-base']};
`

export const ImageHolder = styled.div`
  /* border: 1px solid red; */
  padding: 1rem;
`
