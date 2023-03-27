import styled from 'styled-components'

export const ProductList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 256px 256px 256px 256px;
  grid-row: auto auto;
  grid-column-gap: 3.5rem;
  grid-row-gap: 3rem;
`

// Todo this is not ok is squishing the entire page.
export const ProductPageContainer = styled.main`
  padding: 0 8rem;
`
