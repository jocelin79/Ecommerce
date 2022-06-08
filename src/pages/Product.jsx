import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../reponsive"
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import axios from 'axios'

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile ({
    padding: "10px",
    flexDirection: "column",
    })}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile ({heightn: "40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile ({padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile ({width: "100%"})}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }

  &:active {
  background-color: #7ab47b;
  transform: translateY(2px);
}
`

const Product = () => {
  const location = useLocation()
  const seller = location.pathname.split("/")[2]
  const id = location.pathname.split("/")[3]
  const [product, setProduct] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [productName, setProductName] = useState("")
  const dispatch = useDispatch("")

  const url = "http://localhost:5000/api/sellers/seller/" + seller

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(url)
        const products = res.data
        const arr = products.filter(element => element.productId === id)
        const productSearched = arr[0]
        setImageUrl(productSearched.items[0].images[0].imageUrl)
        setPrice(productSearched.items[0].sellers[0].commertialOffer.Installments[0].Value)
        setProductName(productSearched.productName)
        setProduct(productSearched)
      } catch (err) {}
    }
    getProduct()
  }, [])

  const handleQuantity = (type) => {
    if ((type === "dec") && (quantity > 1)) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    dispatch(

      addProduct({...product, quantity})
    )
  }


  return (
    <Container>
      <Navbar/>
      <Announcement text="Geladeiras Frost Free "/>
      <Wrapper>
        <ImgContainer>
          <Image src={imageUrl} alt={productName}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{productName}</Title>
          <Price>R$ {price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product