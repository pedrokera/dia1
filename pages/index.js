import styled from 'styled-components'
const Container = styled.div`
  height: 100vh;
  background-color: #000;
  text-align: center;
`

const Title = styled.p`
  text-decoration: line-through;
  font-size: 50px;
  color: #fff;
`
const Subtitle = styled.q`
  font-size: 40px;
  color: #fff;
`

export default function Home() {
  return( 
    <Container>
  <Title>
    RISCA
  </Title>
  </Container>
    )
}
