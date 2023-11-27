import styled, { css } from 'styled-components'

export const Box = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.invertBg};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
