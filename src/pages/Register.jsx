import { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive"
import {publicRequest} from "../requestMethods"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00cece;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile ({width: "75%", marginTop: "-115px"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`

const Error = styled.span`
  color: red;
`

const Success = styled.span`
  color: green;
`

const Register = () => {
  const [usernameRegister, setUsernameRegister] = useState("")
  const [passwordRegister,setPasswordRegister] = useState("")
  const [emailRegister, setEmailRegister] = useState("")
  const [success, setSuccess] = useState("")
  const [error,setError] = useState("")

  const register = async () => {
    try{
      var user = {
        username: usernameRegister,

        email: emailRegister,
    
        password: passwordRegister
      }
      const res = await publicRequest.post("/auth/register", user)
      setSuccess(res.data)
    }catch(err){
      setError(err)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    register()
  }

  return (
    <Container>
      <Wrapper>
        <Title>CRIE UMA CONTA</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username" onChange={(e) => setUsernameRegister(e.target.value)}/>
          <Input placeholder="email" onChange={(e) => setEmailRegister(e.target.value)}/>
          <Input placeholder="password" onChange={(e) => setPasswordRegister(e.target.value)}/>
          <Input placeholder="confirm password"/>
          <Agreement>Ao criar uma conta, eu concordo com o processamento dos meus dados pessoais de acordo com a <b>POLÍTICA DE PRIVACIDADE</b></Agreement>
          <Button onClick={handleClick} >CRIAR</Button>
          {error && <Error>Algo está errado...</Error>}
          {success && <Success>Conta Registrada</Success>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register