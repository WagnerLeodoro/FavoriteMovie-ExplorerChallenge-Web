import { Container } from './styles'
import PropTypes from 'prop-types'

export function Button({ title, loading = false, save, ...rest }) {
  return (
    <Container type="button" disabled={loading} save={save} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  save: PropTypes.bool,
}
