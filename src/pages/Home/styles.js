import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;

  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'header header'
    'section menu'
    'content content';
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`

export const NewMovie = styled.a`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 48px;

  border-radius: 8px;

  svg {
    margin-right: 8px;
  }
`
