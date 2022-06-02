import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {mobile} from "../reponsive"
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

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
  
  const location = useLocation()
  const cep = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const [sellers, setSellers] = useState("")
  const baseUrl = "http://localhost:5000/api/sellers/"
  const url = baseUrl + cep

  
  axios(url)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  return (
    <Container>
      <Navbar/>
      <Announcement width="100%" text="Fraudas para seu filho"/>
      <Title>{cep}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Produtcs</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disable>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disable>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Produtcs</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="decs">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* <Products cep={cep} filters={filters} sort={sort}/> */}
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList