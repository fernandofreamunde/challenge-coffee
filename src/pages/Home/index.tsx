import { Hero } from './components/Hero'
import AmericanoPicture from '../../assets/Americano.png'
import TradPicture from '../../assets/TradExpresso.png'
import CreamyPicture from '../../assets/ExpressoCremoso.png'
import IcedPicture from '../../assets/IcedCoffeee.png'
import MilkedPicture from '../../assets/CoffeeComLeite.png'
import LattePicture from '../../assets/Latte.png'
import CapuccinoPicture from '../../assets/Capuccino.png'
import MacchiatoPicture from '../../assets/Macchiato.png'
import MochaccinoPicture from '../../assets/Mochaccino.png'
import HotChocolatPicture from '../../assets/HotChocolate.png'
import CubanPicture from '../../assets/Cubano.png'
import HawaiianPicture from '../../assets/Havaiano.png'
import ArabicPicture from '../../assets/Arabe.png'
import IrishPicture from '../../assets/Irish.png'
import { ProductCard } from './components/ProductCard'
import { ContentContainer, ProductList, ProductPageContainer } from './styles'

export interface ProductTag {
  name: string
}

export interface Product {
  id: number
  name: string
  description: string
  tags: ProductTag[]
  image: string
  price: number
}

export function Home() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Traditional Expresso',
      description: 'Coffee made with hot water and grounded coffee beans',
      tags: [{ name: 'Traditional' }],
      image: TradPicture,
      price: 990,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      description: 'Diluted Expresso, less intense than the Traditional',
      tags: [{ name: 'Traditional' }],
      image: AmericanoPicture,
      price: 990,
    },
    {
      id: 3,
      name: 'Creamy Expresso',
      description: 'Traditional Expresso with creamy foam',
      tags: [{ name: 'Traditional' }],
      image: CreamyPicture,
      price: 990,
    },
    {
      id: 4,
      name: 'Icy Expresso',
      description: 'Brew made with expresso coffee and ice cubes',
      tags: [{ name: 'Traditional' }, { name: 'Iced' }],
      image: IcedPicture,
      price: 990,
    },
    {
      id: 5,
      name: 'Coffee with Milk',
      description: 'Half and half traditional expresso with vaporized milk',
      tags: [{ name: 'Traditional' }, { name: 'With Milk' }],
      image: MilkedPicture,
      price: 990,
    },
    {
      id: 6,
      name: 'Latte',
      description:
        'One dose of expresso coffee with the double of milk and creamy foam',
      tags: [{ name: 'Traditional' }, { name: 'With Milk' }],
      image: LattePicture,
      price: 990,
    },
    {
      id: 7,
      name: 'Capuccino',
      description:
        'Drink with Cinnamon made of equal parts of coffee, milk and foam',
      tags: [{ name: 'Traditional' }, { name: 'With Milk' }],
      image: CapuccinoPicture,
      price: 990,
    },
    {
      id: 8,
      name: 'Macchiato',
      description: 'Expresso Coffee mixed with a bit of hot milk and foam',
      tags: [{ name: 'Traditional' }, { name: 'With Milk' }],
      image: MacchiatoPicture,
      price: 990,
    },
    {
      id: 9,
      name: 'Mochaccino',
      description:
        'Espresso coffee with chocolate sauce, a little milk and foam',
      tags: [{ name: 'Traditional' }, { name: 'With Milk' }],
      image: MochaccinoPicture,
      price: 990,
    },
    {
      id: 10,
      name: 'Hot Chocolate',
      description: 'Drink made with chocolate dissolved in hot milk and coffee',
      tags: [{ name: 'Special' }, { name: 'With Milk' }],
      image: HotChocolatPicture,
      price: 990,
    },
    {
      id: 11,
      name: 'Cuban',
      description: 'Iced espresso drink with rum, cream and mint',
      tags: [{ name: 'Special' }, { name: 'Iced' }, { name: 'Alcoholic' }],
      image: CubanPicture,
      price: 990,
    },
    {
      id: 12,
      name: 'Hawaiian',
      description: 'Sweet drink prepared with coffee and coconut milk',
      tags: [{ name: 'Special' }],
      image: HawaiianPicture,
      price: 990,
    },
    {
      id: 13,
      name: 'Arabic',
      description: 'Drink prepared with Arabic coffee beans and spices',
      tags: [{ name: 'Special' }],
      image: ArabicPicture,
      price: 990,
    },
    {
      id: 14,
      name: 'Irish',
      description:
        'Drink based on coffee, Irish whiskey, sugar and whipped cream',
      tags: [{ name: 'Special' }, { name: 'Alcoholic' }],
      image: IrishPicture,
      price: 990,
    },
  ]

  return (
    <ProductPageContainer>
      <Hero />

      <ContentContainer>
        <h1>Our Coffees</h1>

        <ProductList>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </ProductList>
      </ContentContainer>
    </ProductPageContainer>
  )
}
