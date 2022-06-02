import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  height: 35px;
  width: ${props => props.width};
  background-color: #1e5bc6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
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
