import { useState } from "react";
import { Title, Ball, Container, Row } from "./styles";

export function Atribute({ title, onClick, hasError, isAtribute }) {
  const [currentStat, setCurrentStat] = useState(1);

  const getCurrentStat = (index) => {
    return isAtribute ? index === 1 ? true : index < currentStat : index === 0 ? true : index < currentStat
  }

  const handleClick = (index) => {
    if (!hasError) {
      setCurrentStat(index + 1)      
      onClick({ value: index, atribute: title })
    } 
  } 

  return (
    <Container>
      <Title>{ title }</Title>
    
      <Row>
        {[1,2,3,4,5].map(idx => {
          return (
            <Ball key={idx} onClick={() => handleClick(idx, title)} filled={getCurrentStat(idx)} />
          )
        })}        
      </Row>
    </Container>
  )
}
