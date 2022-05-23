import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {mobile} from "../reponsive"

const Container = styled.div`

`

const Title = styled.h1`
  margin: 20px;
`


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile ({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column"})}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile ({marginRight: "0"})}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile ({margin: "10px 0"})}
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produtcs</FilterText>
          <Select>
            <Option disable selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disable selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Produtcs</FilterText>
          <Select>
            <Option selected>
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList