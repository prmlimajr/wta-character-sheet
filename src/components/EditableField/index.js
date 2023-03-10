import { Container, Editable, Field } from "./styles";

export function EditableField({ title, onChange }) {
  return (
    <Container>
      <Field>{title}:</Field>

      <Editable onChange={onChange} />
    </Container>
  )
}
