import { Facebook, Instagram, MailOutline, Phone, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../reponsive"

const Container = styled.div`
  display: flex;
  ${mobile ({height: "600px" ,flexDirection: "column"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile ({flex:"0", height: "200px", padding: "10px 20px"})}
`

const Logo = styled.h1`
${mobile ({fontSize: "24px"})}
`

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile ({fontSize: "14px", margin: "10px 0"})}
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
  ${mobile ({width: "30px", height: "30px"})}
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile ({display: "none"})}
`

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile ({fontSize: "24px", marginBottom: "20px"})}
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
  ${mobile ({flex:"0", padding: "0px 20px", marginTop: "20px"})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
   ${mobile ({marginBottom: "20px"})}
`

const Payment = styled.img``

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Carrefour.</Logo>
        <Desc>Carrefour Comércio e Indústrias Ltda: Via de Acesso Norte, Km 38, nº 420, Empresarial Gato Preto, Cajamar - SP | CEP 07789-100 | CNPJ: 45.543.915/0846-95 || Envio de documentos administrativos e jurídicos: Rua George Eastman, nº 213 - Vila Tramontano, São Paulo, SP | CEP 05690-000</Desc>
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

        <Title>Atendimento</Title>
        <List>
          <ListItem>Minha conta</ListItem>
          <ListItem>Meus pedidos</ListItem>
          <ListItem>Encontre uma loja</ListItem>
          <ListItem>Central de Atendimento</ListItem>
          <ListItem>Cartão Carrefour</ListItem>
          <ListItem>Perguntas Frequentes</ListItem>
          <ListItem>Denunciar Produtos</ListItem>
          <ListItem>Consumidor.gov</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>Para regiões metropolitanas: 3004-2222
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>Para demais regiões: 0800-718-2222
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/> atendimento@carrefour.com.br
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer