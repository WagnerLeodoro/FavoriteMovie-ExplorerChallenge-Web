import { Header } from '../../components/Header'

import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'

export function Home() {
  return (
    <Container>
      <Header />

      <Section title="Meus Filmes">
        <NewMovie>
          <FiPlus size={16} />
          Adicionar filme
        </NewMovie>
      </Section>

      <Content>
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
      </Content>
    </Container>
  )
}
