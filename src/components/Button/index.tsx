import * as S from './styles'
import { ImOffice, ImBubbles, ImWhatsapp } from 'react-icons/im'

export type ButtonProps = {
  text?: string
  tipo?: 'full' | 'slim'
  ico?: 'studio' | 'zap' | 'comunidade'
  cor?: string
  invert?: boolean
}

const Button = ({
  text = 'botao',
  tipo = 'full',
  ico = 'studio',
  cor = 'red',
  invert = false
}: ButtonProps) => {
  let Ico
  switch (ico) {
    case 'comunidade':
      Ico = <ImBubbles />
      break
    case 'zap':
      Ico = <ImWhatsapp />
      break
    case 'studio':
      Ico = <ImOffice />
      break
    default:
      Ico = null
  }
  return (
    <S.Box cor={cor} tipo={tipo} invert={invert}>
      {Ico}
      {text}
    </S.Box>
  )
}

export default Button
