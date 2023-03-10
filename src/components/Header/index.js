import { useState } from "react";
import { Column, Row, Title } from "./styles";
import { EditableField } from '../EditableField'

export function Header() {
  const [name, setName] = useState('')
  const [player, setPlayer] = useState('')
  const [chronicle, setChronicle] = useState('')
  const [race, setRace] = useState('')
  const [augur, setAugur] = useState('')
  const [tribe, setTribe] = useState('')
  const [packName, setPackName] = useState('')
  const [packTotem, setPackTotem] = useState('')
  const [concept, setConcept] = useState('')

  return (
    <>
      <Title>{'<>'} Werewolf the Apocalypse {'<>'}</Title>

      <Row>
        <Column>
          <EditableField title='Nome' onChange={(e) => setName(e.target.value)} />

          <EditableField title='Jogador' onChange={(e) => setPlayer(e.target.value)} />

          <EditableField title='Cronica' onChange={(e) => setChronicle(e.target.value)} />      
        </Column>

        <Column>
          <EditableField title='Raca' onChange={(e) => setRace(e.target.value)} />

          <EditableField title='Augurio' onChange={(e) => setAugur(e.target.value)} />

          <EditableField title='Tribo' onChange={(e) => setTribe(e.target.value)} />      
        </Column>

        <Column>
          <EditableField title='Nome da Matilha' onChange={(e) => setPackName(e.target.value)} />

          <EditableField title='Totem da Matilha' onChange={(e) => setPackTotem(e.target.value)} />

          <EditableField title='Conceito' onChange={(e) => setConcept(e.target.value)} />      
        </Column>
      </Row>
    </>
  )
}
