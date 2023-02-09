import styled, { css } from 'styled-components'

export const Box = styled.main`
  ${({ theme }) => css`
    width: 500px;
    svg path {
      //stroke: ${theme.colors.primary};
    }
    .line0 {
      stroke-dasharray: 500;
    }
    .box1 {
      stroke-dasharray: 900;
      stroke-dashoffset: 0;
    }
    .hid {
      display: none;
    }
  `}
`
