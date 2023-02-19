import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Box = styled.button<ButtonProps>`
  ${({ theme, tipo, cor, invert }) => css`
    background-color: ${tipo === 'full' ? cor : 'transparent'};
    border: ${tipo === 'slim' ? '3px solid' : 'none'};
    color: ${tipo === 'full' ? '#FFF' : cor || theme.colors.txt1};
    display: flex;
    align-items: center;
    padding: 0.8rem 2.4rem;
    border-radius: ${invert ? '0 2.5rem' : '2.5rem 0'};
    gap: ${theme.spacings.xxsmall};
    font-style: normal;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.large};
    line-height: 108%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  `}
`
