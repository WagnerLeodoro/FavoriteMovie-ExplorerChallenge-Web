import { Avatar, Brand, Container, Profile } from './styles'
import PropTypes from 'prop-types'
import { useAuth } from '../../hooks/useAuth'

export function Header({ children }) {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }
  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>
      {children}
      <Profile>
        <div>
          <strong>Wagner Leodoro</strong>
          <a onClick={handleSignOut}>sair</a>
        </div>
        <Avatar to="/profile">
          <img
            src="https://github.com/WagnerLeodoro.png"
            alt="foto do usuário"
          />
        </Avatar>
      </Profile>
    </Container>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}
