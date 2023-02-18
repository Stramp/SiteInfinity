import { SvgNameProps } from './SvgName'
import styled, { css } from 'styled-components'

export const Main = styled.div<SvgNameProps>`
  ${({ v }) => css`
    width: 100%;
    display: flex;
    align-items: ${v === 'full' ? 'flex-start' : 'center'};
    justify-content: center;
    flex-direction: column;
    padding: ${v === 'full' ? '40px 0 0 90px' : '0'};
  `}
`
export const LogoContainer = styled.div<SvgNameProps>`
  ${({ v }) => css`
    width: ${v === 'hall1' ? '45%' : v === 'full' ? '40%' : '100%'};
    display: ${v === 'hall2' ? 'none' : 'block'};
    transform: ${v === 'full' ? 'rotate(-25deg)' : 'unset'};
    margin: ${v === 'full' ? '0 0 -50px -75px' : '0 0 3% 0'};
  `}
`
