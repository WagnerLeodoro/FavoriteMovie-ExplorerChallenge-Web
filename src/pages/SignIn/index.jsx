import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button save title="Entrar" />
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  )
}