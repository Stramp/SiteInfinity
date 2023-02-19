import styled, { css } from 'styled-components'

export const Box = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    a {
      color: ${theme.colors.invertBg};
    }
  `}
`
