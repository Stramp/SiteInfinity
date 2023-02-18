import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.invertBg};
  `}
`
