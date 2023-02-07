import React, { forwardRef } from 'react'
import * as S from './styles'
type SectionProps = {
  id?: string
  children?: React.ReactNode
}
const Section: React.ForwardRefRenderFunction<HTMLHeadingElement, SectionProps> = ({
  id,
  children
}) => {
  return (
    <S.Box id={id} className="componente">
      {children}
    </S.Box>
  )
}

export default forwardRef(Section)
