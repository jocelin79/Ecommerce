import { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive"
import {publicRequest} from "../requestMethods"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile ({width: "75%"})}
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
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username" onChange={(e) => setUsernameRegister(e.target.value)}/>
          <Input placeholder="email" onChange={(e) => setEmailRegister(e.target.value)}/>
          <Input placeholder="password" onChange={(e) => setPasswordRegister(e.target.value)}/>
          <Input placeholder="confirm password"/>
          <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
          <Button onClick={handleClick} >CREAT</Button>
          {error && <Error>Algo está errado...</Error>}
          {success && <Success>Conta Registrada</Success>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register