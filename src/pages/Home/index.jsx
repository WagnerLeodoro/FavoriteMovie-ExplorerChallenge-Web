import { Header } from '../../components/Header'

import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles'
import { Movie } from '../../components/Movie'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />

      <header>
        <h2>Meus Filmes</h2>
        <NewMovie to="/new">
          <FiPlus size={16} />
          Adicionar filme
        </NewMovie>
      </header>

      <Content>
        <Link to="/details/1">
          <Movie
            data={{
              title: 'Interstelar',
              rating: '4',
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, animi! Tempore consectetur rerum expedita? Animi, dolorem aspernatur quae quia iure culpa excepturi error porro beatae delectus minus fugit odit quos.',
              tags: [
                {
                  id: '1',
                  name: 'Ação',
                },
                { id: '2', name: 'Científico' },
              ],
            }}
          />
        </Link>

        <Link to="/details/2">
          <Movie
            data={{
              title: 'Interstelar',
              rating: '4',
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, animi! Tempore consectetur rerum expedita? Animi, dolorem aspernatur quae quia iure culpa excepturi error porro beatae delectus minus fugit odit quos.',
              tags: [
                {
                  id: '1',
                  name: 'Ação',
                },
                { id: '2', name: 'Científico' },
              ],
            }}
          />
        </Link>
        <Link to="/details/3">
          <Movie
            data={{
              title: 'Interstelar',
              rating: '4',
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, animi! Tempore consectetur rerum expedita? Animi, dolorem aspernatur quae quia iure culpa excepturi error porro beatae delectus minus fugit odit quos.',
              tags: [
                {
                  id: '1',
                  name: 'Ação',
                },
                { id: '2', name: 'Científico' },
              ],
            }}
          />
        </Link>
      </Content>
    </Container>
  )
}
