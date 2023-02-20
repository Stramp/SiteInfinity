import * as S from './styles'
import animCanva from './canva'
import { ReactElement, useEffect } from 'react'
export type BgHallProps = {
  children?: ReactElement
}
const BgHall = ({ children }: BgHallProps) => {
  useEffect(() => {
    animCanva()
  }, [])
  return (
    <S.Box id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      {children}
    </S.Box>
  )
}

export default BgHall
