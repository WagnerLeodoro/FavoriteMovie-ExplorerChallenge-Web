import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 8px 0 15px;
  gap: ${({ isFull }) => (isFull ? '16px' : '12px')};

  > svg {
    font-size: ${({ isFull }) => (isFull ? '16px' : '14px')};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
