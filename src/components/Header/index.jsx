import { Brand, Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Pesquisar por título" />
      <Profile>
        <div>
          <strong>Wagner Leodoro</strong>
          <a>sair</a>
        </div>
        <img src="https://github.com/WagnerLeodoro.png" alt="foto do usuário" />
      </Profile>
    </Container>
  )
}
