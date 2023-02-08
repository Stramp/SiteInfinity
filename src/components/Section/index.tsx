/* eslint-disable prettier/prettier */
import React, {  forwardRef } from 'react'
import * as S from './styles'
type SectionProps = {
  id?: string
  children?: React.ReactNode
}

const Section = forwardRef<HTMLHeadingElement, SectionProps>(({ id, children }, ref) => {
  return (
    <S.Box id={id} className="componente" ref={ref}>
      {children}
    </S.Box>
  )
})

Section.displayName = 'Section'

export default Section

