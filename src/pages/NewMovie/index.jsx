import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Container, Controls, Form } from './styles'
import { MovieItem } from '../../components/MovieItem'
import { Header } from '../../components/Header'
import { Link } from 'react-router-dom'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Link to="/">
        <FiArrowLeft />
        voltar
      </Link>

      <main>
        <Form>
          <h2>Novo Filme</h2>
          <div className="form-group">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0  a 5)" />
          </div>
          <Textarea placeholder="Observações" />
        </Form>
        <Section title="Marcadores">
          <div className="tags">
            <MovieItem value="react" />
            <MovieItem isnew placeholder="Nova tag" />
          </div>
        </Section>
        <Controls>
          <Button title="Excluir" />
          <Button save title="Salvar" />
        </Controls>
      </main>
    </Container>
  )
}
