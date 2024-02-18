import PropTypes from 'prop-types'

import { Tag } from '../Tag'
import { Container } from './styles'
import { Rating } from '../Rating'

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isFull={false} />
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}

Movie.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
}
