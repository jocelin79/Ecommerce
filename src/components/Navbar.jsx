import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from "../reponsive"
import {logOut} from "../redux/userRedux"
import { useDispatch } from 'react-redux'


const Container = styled.div`
  height: 60px;
  ${mobile ({height: "50px"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile ({padding: "10px 0"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile ({display: "none"})}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile ({display: "none"})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile ({display: "none"})}
`

const Input = styled.input`
  border: none;
  ${mobile ({width: "50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile ({fontSize: "24px"})}
`

const LogoImg = styled.img`
  ${mobile ({
    transform: "scale(0.75)",
    })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile ({flex: "2",justifyContent: "space-around", marginLeft: "20px"})}
`

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile ({fontSize: "12px", marginLeft: "0px"})}
`

const Navbar = () => {
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState("")
  const quantity = useSelector(state=> state.cart.quantity)
  const cliente = useSelector(state=> state.user.currentUser)

  useEffect(() => {
    setCurrentUser(cliente)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(

      logOut()
    )
    setCurrentUser(cliente)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Buscar"/>
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <LogoImg src="https://i.ibb.co/FgKyZqk/carrefour-1.png"/>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Logo>
              Carrefour.
            </Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/cart">
            <MenuItem>
              <Badge
              badgeContent={quantity} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          {currentUser ? "" : <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>}
          {currentUser && <MenuItem>OLÁ, CLIENTE!</MenuItem>}
          {currentUser && <MenuItem onClick={handleClick}>LOGOUT</MenuItem>}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar