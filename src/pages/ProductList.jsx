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
  const [sellersId, setSellersId] = useState([])
  const [seller, setSeller] = useState("")
  const baseUrl = "http://localhost:5000/api/sellers/"

  
  const url = baseUrl + cep

  useEffect(() => {
    const getSellersId = async () => {
      axios(url)
      .then(function (response) {
        const arr = (JSON.stringify(response.data)).split(",")
        const newArr = arr.map((item) => item.includes('name') ? item.substring(8, item.length -1) : "noId")
        const sellersArr = newArr.filter((element) => element.includes('noId') === false)
        setSellersId(sellersArr)
        setSeller(sellersArr[0])
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    getSellersId()
  }, [])
  

  const handleSeller = (e) => {
    const value = e.target.value
    setSeller(value)
  }

  return (
    <Container>
      <Navbar/>
      <Announcement width="100%" text="Fraudas para seu filho"/>
      <Title>{seller}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Produtos</FilterText>
          <Select name="color" onChange={handleSeller}>
            <Option disable>
              Carrefours da sua região
            </Option>
            {sellersId.map((item, i) => <Option key={item}>{item}</Option>)}
          </Select>
          <Select name="size">
          {/* <Select name="size" onChange={handleFilters}> */}
            <Option disable>
              Categoria
            </Option>
            <Option>Fruta</Option>
            <Option>Laticínio</Option>
            <Option>Café da Manhã</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Produtos</FilterText>
          <Select>
            <Option value="newest">
              Novos
            </Option>
            <Option value="asc">Preço (asc)</Option>
            <Option value="decs">Preço (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products seller={seller}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList