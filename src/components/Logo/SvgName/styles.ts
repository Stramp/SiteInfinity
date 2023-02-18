import styled, { css } from 'styled-components'
import { SvgNameProps } from '.'

export const Box = styled.div<SvgNameProps>`
  ${({ theme, v }) => css`
    width: 100%;
    height: 100%;
    color: ${theme.colors.bg};
    #dragons {
      fill: ${theme.colors.primary};
    }
    svg {
      path {
        stroke: ${theme.colors.invertBg};
      }

      svg {
        path {
          stroke: unset;
        }
        color: ${theme.colors.invertBg};
        display: ${v === 'hall2' ? 'block' : 'none'};
      }
    }
  `}
`
