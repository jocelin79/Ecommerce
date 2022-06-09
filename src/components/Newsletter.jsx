import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../reponsive"

const Container = styled.div`
  height: 30vh;
  background-color: #fcd7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile ({height: "25vh"})}
`

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  ${mobile ({fontSize: "35px", marginBottom: "10px"})}
`

const Desc = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile ({textAlign: 'center', fontSize: "16px", width: "250px", marginBottom: "15px"})}
  
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile ({width: '60%'})}
`

const Input = styled.input`
  border:none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #1e5bc6;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Ofertas Exclusivas</Title>
      <Desc>Receba os melhores decontos e novidades em seu e-mail !</Desc>
      <InputContainer>
        <Input placeholder="Seu e-mail"/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter