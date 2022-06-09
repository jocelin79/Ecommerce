import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e5bc6
`
const Wrapper = styled.div`
  height: 35px;
  width: ${props => props.width};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile ({fontSize: "13px"})}
`

const Announcement = (props) => {
  return (
    <Container>
      <Wrapper width={props.width}>
        Super Oferta de {props.text}!
      </Wrapper>
    </Container>
  )
}

export default Announcement
