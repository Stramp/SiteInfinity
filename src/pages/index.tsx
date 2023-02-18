/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Section from 'components/Section'
import Logo from 'components/Logo'

gsap.registerPlugin(ScrollTrigger)
export const Box = styled.div`
  ${() => css`
    display: flex;
    width: 500vw;
    block-size: fit-content;
    align-items: center;
    justify-content: center;
  `}
`

export default function Home() {
  //const text = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const components = document.querySelectorAll('.componente')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const container: HTMLElement = document.querySelector('#container')!  

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => '+=' + container.offsetWidth
      }
    })
  }, [])

  return (
    <Box id="container">
      <Section>
        <Logo version='hall1'/>
      </Section>
      <Section />
      <Section />
      <Section />
      <Section />
    </Box>
  )
}
