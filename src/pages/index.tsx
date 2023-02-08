/* eslint-disable prettier/prettier */
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Section from 'components/Section'

export const Box = styled.div`
  ${() => css`
    display: flex;
    width: 500vw;
    block-size: fit-content;

    align-items: center;
    justify-content: center;
  `}
`
export const Svg = styled.div`
  ${() => css`
    width: 500px;
    svg path {
      // stroke: white;
    }
    #line1 {
      stroke-dasharray: 500;
    }
    #line2 {
      stroke-dasharray: 900;
    }

    // @keyframes dash {
    //   from {
    //     stroke-dashoffset: 300;
    //   }
    //   to {
    //     stroke-dashoffset: 0;
    //   }
    // }
  `}
`
export default function Home() {
  //const text = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const components = document.querySelectorAll('.componente')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const container: HTMLElement = document.querySelector('#container')!
    const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } })
    tl.from('#line1', { strokeDashoffset: 500, scale: 0.2, transformOrigin: 'center' })
      .from(
        '#line2',
        {
          strokeDashoffset: 900,
          scale: 0.2,
          transformOrigin: 'center'
        },
        '-=.7'
      )
      .from(
        '#line3',
        {
          scale: 0.1,
          transformOrigin: 'bottom'
        },
        '-=.74'
      )
      .from(
        '#line4',
        {
          strokeDashoffset: 1300
        },
        '-=.74'
      )
      .from('#line5', {
        strokeDashoffset: 1300
      })
      .from(
        '#line7',
        {
          strokeDashoffset: 1300,
          scale: 0.2,
          transformOrigin: 'center'
        },
        '-=2.5'
      )
      .from(
        '#line6',
        {
          scale: 0.1,
          transformOrigin: 'top',
          duration: 0.8
        },
        '-=2.17'
      )

      .from('#line8', {
        strokeDashoffset: 1300
      })

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
        <h1>teste</h1>
        <Svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 736 553">
            <path id="line4" stroke="#000" strokeWidth="3" d="M380 356.5H0" />
            <path id="line5" stroke="#BE0000" strokeWidth="3" d="M292.971 356.5H80.136" />
            <path
              id="line6"
              fill="#BE0000"
              stroke="#000"
              strokeWidth="3"
              d="M404 257h99v35h-99z"
            />
            <path
              id="line7"
              stroke="#000"
              strokeWidth="3"
              d="M459 1.5h275.5V236c0 30.652-24.848 55.5-55.5 55.5H403.5V57c0-30.652 24.848-55.5 55.5-55.5Z"
            />
            <path
              id="line3"
              fill="#BE0000"
              stroke="#000"
              strokeWidth="3"
              d="m452.5 315 50.469-.625S499 354 456 356.5h-60.5s16-36 57-41.5Z"
            />
            <path
              id="line2"
              stroke="#000"
              strokeWidth="3"
              d="M574 525.5H388.5V388c0-40.593 32.907-73.5 73.5-73.5h185.5V452c0 40.593-32.907 73.5-73.5 73.5Z"
            />
            <path
              id="line1"
              stroke="#000"
              strokeWidth="3"
              d="M390 256.5h113.5V308c0 26.786-21.714 48.5-48.5 48.5H341.5V305c0-26.786 21.714-48.5 48.5-48.5Z"
            />
            <path
              id="line8"
              stroke="#000"
              strokeDasharray="1 28"
              strokeWidth="4"
              d="M585 549h.999C630.182 549 666 513.183 666 469"
            />
          </svg>
        </Svg>
      </Section>
      <Section />
      <Section />
      <Section />
      <Section />
    </Box>
  )
}
