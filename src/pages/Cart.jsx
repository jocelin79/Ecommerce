import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import {mobile} from "../reponsive"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../redux/cartRedux'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile ({padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};

  &:active {
  background-color: #7ab47b;
  transform: translateY(2px);
  }
`

const TopTexts = styled.div`
  ${mobile ({display: "none"})}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile ({flexDirection: "column"})}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile ({flexDirection: "column"})}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile ({margin: "5px 15px"})}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile ({marginBottom: "20px"})}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 4px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
  width: 100%;
  font-weight: 600;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    //update cart
    e.preventDefault()
    
    dispatch(

      removeProduct()
    )
  }

  return (
    <Container>
      <Navbar/>
      <Announcement text="Material Escolar para seu Filho "/>
      <Wrapper>
        <Title>SEU CARRINHO</Title>
        <Top>
          <TopButton onClick={handleClick} >REMOVER DO CARRINHO</TopButton>
          <TopTexts>
            <TopText>Itens no Carrinho (2)</TopText>
            <TopText>Lista de Desejos (0)</TopText>
          </TopTexts>
          <Link to="/">
            <TopButton type="filled">VOLTAR ÀS COMPRAS</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) =>(
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.items[0].images[0].imageUrl} alt={product.items[0].name}/>
                    <Details>
                      <ProductName><b>Produto:</b> {product.items[0].name}</ProductName>
                      <ProductId><b>ID:</b> {product.productId}</ProductId>
                      <ProductSize><b>Preço da unidade:</b> R$ {product.items[0].sellers[0].commertialOffer.Installments[0].Value}</ProductSize>
                    </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>{product.quantity} un</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.items[0].sellers[0].commertialOffer.Installments[0].Value * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr/>
              </>
              ))}
          </Info>
          <Summary>
            <SummaryTitle>SEU PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Custo de Entrega</SummaryItemText>
              <SummaryItemPrice>R$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto</SummaryItemText>
              <SummaryItemPrice>R$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>FINALIZAR COMPRA</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart