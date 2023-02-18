import SvgDragon from './SvgDragon'
import SvgName from './SvgName'
import * as S from './styles'

export type LogoProps = {
  version?: 'hall1' | 'hall2' | 'full' | 'slim'
}

const Logo = ({ version = 'hall2' }) => {
  return (
    <S.Main v={version}>
      <S.LogoContainer v={version}>
        <SvgDragon />
      </S.LogoContainer>
      <SvgName v={version} />
    </S.Main>
  )
}

export default Logo
