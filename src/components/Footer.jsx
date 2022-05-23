import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../reponsive"

const Container = styled.div`
  display: flex;
  ${mobile ({flexDirection: "column"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile ({display: "none"})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Carrefour.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur sunt excepturi aliquid debitis sapiente similique magni molestias! Sequi maxime tempore doloribus ea minima blanditiis distinctio odio vel voluptatum voluptas?</Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

        <Title>Udeful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishilist</ListItem>
          <ListItem>Term</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/>622 Dixie Path, Sout Tobbint 99635
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>+055 11 999636455
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/>contact@carrefour.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer