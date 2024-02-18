import { FiArrowLeft, FiCamera, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Avatar, Container, Form } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/WagnerLeodoro.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button save title="Salvar" />
      </Form>
    </Container>
  )
}