import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'
import { useTranslation } from 'react-i18next'
import Arrow from './images/Arrow.svg'
import ENSIcon from './images/ENSIcon.png'

const SHOULD_DELEGATE_QUERY = gql`
  query shouldDelegateQuery @client {
    shouldDelegate
  }
`

const LogoSmall = styled.img`
  width: 88px;
  height: 88px;
  padding: 10px;
  border-radius: 50%;
  margin: auto;
  display: none;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);


`


const Link = styled(`a`)`
  display: none;
`

const ArrowSmall = styled.img`
  margin: auto;
  display: none;
  width: 22px;
  color: #b3b3b3;
`

const BannerTitle = styled(`div`)`
  color: #0e0e0e;
  letter-spacing: -0.01em;
  font-weight: bold;
  font-size: 18px;
`

const BannerContent = styled(`div`)`
  color: #787878;
  font-size: 18px;
  letter-spacing: -0.01em;
  font-weight: 500;
  font-size: 15px;
`

const BannerContentWrapper = styled('div')`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export const MainPageBannerContainer = styled(`div`)`
  position: absolute;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: white;
  border-radius: 100px;
  max-width: 90%;
  display: none;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0;
  
  a {
    flex-grow: 1;
    display: none;
    grid-template-columns: 73px 1fr 50px;
  }
  ${mq.medium`
    width: 700px;
  `}
`

export const NonMainPageBannerContainer = styled(`div`)`
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 14px;
  display: none;
  padding: 0px 0px;
  a {
    display: none;
    grid-template-columns: 73px 1fr 50px;
  }
  ${mq.medium`
    height: 78px;
  `}
`

export const NonMainPageBannerContainerWithMarginBottom = styled(
  NonMainPageBannerContainer
)`
  margin-bottom: 20px;
`

export function DAOBannerContent() {
  const { t } = useTranslation()
  const {
    data: { shouldDelegate }
  } = useQuery(SHOULD_DELEGATE_QUERY)

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={
        shouldDelegate
          ? 'https://0xxai.xyz/'
          : 'https://0xxai.xyz/'
      }
    >
      <LogoSmall $daoGradient={!shouldDelegate} src={ENSIcon} alt="ENS logo" />
      <BannerContentWrapper>
        <BannerTitle>
          {shouldDelegate
            ? t('banners.undelegatedTokens.title')
            : t('banners.constitution.title')}
        </BannerTitle>
        <BannerContent>
          {shouldDelegate
            ? t('banners.undelegatedTokens.description')
            : t('banners.constitution.description')}
        </BannerContent>
      </BannerContentWrapper>
      <ArrowSmall src={Arrow} alt="Arrow right icon" />
    </Link>
  )
}
