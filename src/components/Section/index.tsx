import React, { forwardRef } from 'react'
import * as S from './styles'
type SectionProps = {
  id?: string
}
const Section: React.ForwardRefRenderFunction<HTMLHeadingElement, SectionProps> = (
  { id },
  ref
) => {
  return (
    <S.Box id={id}>
      <h1 ref={ref}>Section</h1>
    </S.Box>
  )
}

export default forwardRef(Section)
