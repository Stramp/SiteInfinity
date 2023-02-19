import { useEffect, useState } from 'react'
import * as S from './styles'

const arrFrases = [
  'Projeto meu site profissional, curriculum, fotoasdasdas, historico, projetos Projeto meu site profissiosdasdnal, c  urriculum',
  'Lorem ipsum dolor sit amet consectetur. Platea plasdada 131231acilisis vel lacus ipsum fusce varius.',
  'Lorem ipsum dolor sit amet consectetur. Tristique enim sit urna eget adipiscing elementum a lorem faucibus. Iaculis scelerisque suspendisse vitae tellus aliquam eu mus.'
]

export type PhraseHallProps = {
  prePhrase?: string
  adjetivos?: string[]
  paragraph?: string[]
  time?: number
}

const PhraseHall = ({
  prePhrase = 'NOS SOMOS',
  adjetivos = ['desenvolvedores', 'artistas', 'SONHADORES'],
  paragraph = arrFrases,
  time = 5000
}) => {
  const [phraseCount, setPhraseCount] = useState(1)
  const [adjevtivo, setAdjetivo] = useState(adjetivos[0])
  const [phrase, setPhrase] = useState(paragraph[0])
  useEffect(() => {
    setTimeout(() => {
      setPhraseCount(phraseCount < adjetivos.length - 1 ? phraseCount + 1 : 0)
      setAdjetivo(adjetivos[phraseCount])
      setPhrase(paragraph[phraseCount])
    }, time)
  }, [adjetivos, paragraph, phraseCount, time])
  return (
    <S.Box>
      <h1>
        <span>{prePhrase} </span>
        {adjevtivo}
      </h1>
      <p>{phrase}</p>
    </S.Box>
  )
}

export default PhraseHall
