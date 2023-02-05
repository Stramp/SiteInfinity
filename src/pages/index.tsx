import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Section from 'components/Section'

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    display: flex;
    margin-top: 500px;
    align-items: center;
    justify-content: center;
  `}
`
export default function Home() {
  const text = useRef<HTMLHeadingElement>(null)
  console.log('text.current', text.current)
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: text.current?.id,
          start: 'top 30%',
          end: '290% top',
          scrub: 1,
          pin: '#teste h1',
          markers: true
        }
      })
      .to(text.current, { scale: 14 })
      .to(text.current, { scale: 7, x: -200, rotation: -45 })
      .to(text.current, { rotation: 0 })
      .to(text.current, { rotation: 180 })
      .to(text.current, { rotation: 0, x: -200 })
      .to(text.current, { rotation: 180 })
      .to(text.current, { rotation: 0 })
      .to(text.current, { scale: 7, x: 0, rotation: 0 })
      .to(text.current, { scale: 1 })
  }, [])
  return (
    <div>
      <Section ref={text} id="teste" />
      <Section id="teste2" />
    </div>
  )
}
