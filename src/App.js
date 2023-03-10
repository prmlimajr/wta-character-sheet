import {  useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Atribute } from "./components/Atribute";
import { Divider } from "./components/Divider";
import { ATRIBUTES, HABILITIES } from "./CONSTS";
import { 
  AtributeContainer, 
  Atributes, 
  AtributeTitle, 
  Container 
} from "./styles";

function App() {
  const [strenght, setStrenght] = useState(1)
  const [dexterity, setDexterity] = useState(1)
  const [vigor, setVigor] = useState(1)

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (strenght + dexterity + vigor >= 10) {
      setHasError(true)
    }
  }, [strenght, dexterity, vigor])

  const calculateAtributeTotal = ({ atribute, value }) => {
    if (atribute === 'Forca') {
      setStrenght(value)
    }

    if (atribute === 'Destreza') {
      setDexterity(value)
    }

    if (atribute === 'Vigor') {
      setVigor(value)
    }
  } 

  return (
    <Container>
      <Header />

      <Divider title='Atributos' />

      <Atributes>
        {ATRIBUTES.map((atr, idx) => {
          return (
            <AtributeContainer key={idx}>
              <AtributeTitle>{atr.title}</AtributeTitle>
    
              {atr.data.map((item, idx) => {
                return (
                  <Atribute key={idx} title={item} onClick={(e) => calculateAtributeTotal(e)} hasError={hasError} isAtribute />    
                )
              })}
            </AtributeContainer>    
          )
        })}
      </Atributes>

      <Divider title='Habilidades' />

      <Atributes>
        {HABILITIES.map((hab, idx) => {
          return (
            <AtributeContainer key={idx}>
              <AtributeTitle>{hab.title}</AtributeTitle>

              {hab.data.map((item, idx) => {
                return (
                  <Atribute key={idx} title={item} />
                )
              })}
            </AtributeContainer>
          )
        })}
      </Atributes>

      <Divider title='Vantagens' />
    </Container>
  );
}

export default App;
