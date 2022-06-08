import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({seller}) => {
  const [products, setProducts] = useState([])
  const url = "http://localhost:5000/api/sellers/seller/" + seller

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(url)
        setProducts(res.data)
      } catch (err) {}
    }
    getProducts()
  }, [seller])


  return (
    <Container>
      {products.map(item => <Product item={item} seller={seller} key={item.productId}/>)}
    </Container>
  )
}



export default Products
