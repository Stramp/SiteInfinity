import styled, { css } from 'styled-components'

export const Box = styled.section`
  ${({ theme, id }) => css`
    width: 100vw;
    height: ${id === 'teste' ? '100vh' : '100vh'};
    background-color: ${id === 'teste' ? theme.colors.black : 'blue'};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
