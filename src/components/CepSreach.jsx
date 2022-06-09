import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 60px 10px 60px;
  background-color: #E81e26;
  ${mobile ({margin: "10px 20px 10px 20px", paddingRight: "10px"})}
`

const Left = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Text = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-align: right;
  margin: 20px;
  ${mobile ({fontSize: "18px", margin: "15px"})}
`

const Right = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile ({width: "200px", height: "30px"})}
`

const Input = styled.input`
  border:none;
  outline: none;
  flex: 8;
  padding-left: 20px;
  ${mobile ({fontSize: "10px", width: "90px", paddingLeft: "5px"})}
`

const Button = styled.button`
  height: 40px;
  border: none;
  background-color: #1e5bc6;
  color: white;
  cursor: pointer;
  ${mobile ({fontSize: "10px", height: "30px"})}
`

const CepSearch = () => {
  const [cep, setCep] = useState("")
  return(
    <Container>
      <Left>
        <Text>
          Descubra o Carrefour mais perto de você
        </Text>
      </Left>
      <Right>
        <Input placeholder="Digite aqui seu CEP" onChange={(e) => setCep(e.target.value)}/>
        <Link to={`/products/${cep}`}>
          <Button>
            VERIFICAR
          </Button>
        </Link>
      </Right>
    </Container>
  )
}

export default CepSearch