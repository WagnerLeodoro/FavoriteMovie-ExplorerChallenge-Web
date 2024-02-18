import PropTypes from 'prop-types'
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc'
import { Container } from './styles'

export function Rating({ grade, isFull }) {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      stars.push(<VscStarFull key={i} />)
    } else {
      stars.push(<VscStarEmpty key={i} />)
    }
  }
  return <Container isFull={isFull}>{stars}</Container>
}

Rating.propTypes = {
  grade: PropTypes.number,
  isFull: PropTypes.bool,
}
