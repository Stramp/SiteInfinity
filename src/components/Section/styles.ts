import styled, { css } from 'styled-components'

export const Box = styled.section`
  ${({ theme, id }) => css`
    width: 100vw;
    height: ${id === 'teste' ? '100vh' : '100vh'};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 3px solid black;
  `}
`
