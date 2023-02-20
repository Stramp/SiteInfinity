import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100vw;
    height: 100vh;
    background-image: url('./bgGalazia2.png'),
      linear-gradient(${theme.colors.primary}cf, ${theme.colors.primary}cf);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 0 2000px #000000cf;
    justify-content: center;
    position: relative;
    background-position: center center;
    z-index: 1;
    canvas {
      mix-blend-mode: soft-light;
      position: absolute;
      top: 0;
      left: 0;
    }
  `}
`
