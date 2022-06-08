import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 60px 10px 60px;
  background-color: #E81e26;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Hr = styled.hr`
  border: none;
  height: 4px;
`

const Left = styled.div`
  flex: 1;
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
`

const Right = styled.div`
  flex: 1;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border:none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  height: 40px;
  border: none;
  background-color: #1e5bc6;
  color: white;
  cursor: pointer;
`

const CepSearch = () => {
  const [cep, setCep] = useState("")
  return(
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}

export default CepSearch