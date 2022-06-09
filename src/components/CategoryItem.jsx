import styled from 'styled-components'
import {mobile} from "../reponsive"

const Container = styled.div`
  flex: 1;
  margin: 9px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile ({height: "45vh"})}
`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  color: white;
  background-color: #E81e26;
  margin-bottom: 20px;
  text-align: center;
  padding: 5px;
  ${mobile ({fontSize: "20px", border: "solid 2px black"})}
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #1e5bc6;
  color: white;
  cursor: pointer;
  font-weight: 600;
  ${mobile ({fontSize: "12px", fontWeight: "400", padding: "5px", border: "solid 2px black"})}
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>VER OFERTAS</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem