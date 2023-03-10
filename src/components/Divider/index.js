import { Container, Line, Title } from "./styles";

export function Divider({ title }) {
  return (
    <Container>
      <Line />

      <Title>{title}</Title>

      <Line />
    </Container>    
  )
}
