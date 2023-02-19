import * as S from './styles'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter, FiYoutube } from 'react-icons/fi'
export type SocialMediaProps = {
  rede?: string
  active?: boolean
  url?: string
}
export type SocialMediaListProps = {
  socialMedias?: SocialMediaProps[]
}

const SocialMedia = ({ socialMedias = [] }: SocialMediaListProps) => {
  console.log(!socialMedias.length, socialMedias)

  if (!socialMedias.length) return <></>
  const SocialMediaList = socialMedias?.filter(i => i.active)
  return (
    <S.Box>
      {SocialMediaList?.map(i => {
        return (
          <a href="" key={i.rede}>
            {getIco(i.rede)}
          </a>
        )
      })}
    </S.Box>
  )
}

const getIco = (rede: string | undefined) => {
  switch (rede) {
    case 'facebook':
      return <FaFacebookSquare size="100%" />
    case 'linkedin':
      return <FaLinkedinIn size="100%" />
    case 'github':
      return <FaGithub size="100%" />
    case 'twitter':
      return <FiTwitter size="100%" />
    case 'instagram':
      return <FaInstagram size="100%" />
    case 'youtube':
      return <FiYoutube size="100%" />
    default:
      return null
      break
  }
}

SocialMedia.defaultProps = {
  socialMedias: [
    {
      rede: 'linkedin',
      active: true,
      url: '#'
    },
    {
      rede: 'youtube',
      active: true,
      url: '#'
    },
    {
      rede: 'github',
      active: true,
      url: '#'
    },
    {
      rede: 'facebook',
      active: true,
      url: '#'
    },
    {
      rede: 'twitter',
      active: true,
      url: '#'
    },
    {
      rede: 'instagram',
      active: true,
      url: '#'
    }
  ]
}

export default SocialMedia
