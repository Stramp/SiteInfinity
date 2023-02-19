import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    h1 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.xlarge};
      text-transform: uppercase;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.xxsmall};
      span {
        color: ${theme.colors.txt3};
      }
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xxmedium};
      color: ${theme.colors.txt3};
    }
  `}
`
