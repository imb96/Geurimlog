import React, { FunctionComponent, useEffect } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { AboutIcon } from 'components/icons'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
type IntroductionProps = {
  profileImage?: IGatsbyImageData
}

const Wrapper = styled.div`
  display: flex;
  width: 680px;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0 10px 0;
  justify-content: space-between;
  color: #6210cc;
  @media (max-width: 1024px) {
    width: 90%;
  }
`

const SubTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 10px;
  color: #282728;
`

const Block = styled.div`
  display: flex;
  justify-content: space-around;
`

const AboutButton = styled.button`
  border: none;
  background-color: inherit;
  width: 72px;
  height: 24px;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Badge = styled.button`
  border: none;
  background-color: inherit;
  padding: 1px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const BadgeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 680px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function () {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <>
      <Wrapper className="wrapper">
        <Block>
          <SubTitle className="subtitle">
            <Link to={'/'}>Geurim's Blog</Link>
          </SubTitle>
        </Block>
        <div>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
          />
          <Link to="/info">
            <AboutButton className="about">
              <AboutIcon />
            </AboutButton>
          </Link>
        </div>
      </Wrapper>
      <BadgeWrapper>
        <Link to="https://github.com/imb96">
          <Badge>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  className="icon"
                  d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </Badge>
        </Link>
        <Link to="https://www.linkedin.com/in/%EB%AF%BC%EC%9E%AC-%EA%B9%80-0415a1246/">
          <Badge>
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <rect
                className="icon"
                fill="none"
                height="184"
                rx="8"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                width="184"
                x="36"
                y="36"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="120"
                x2="120"
                y1="112"
                y2="176"
              />
              <line
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                x1="88"
                x2="88"
                y1="112"
                y2="176"
              />
              <path
                d="M120,140a28,28,0,0,1,56,0v36"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <circle cx="88" cy="80" r="12" />
            </svg>
          </Badge>
        </Link>
      </BadgeWrapper>
    </>
  )
}

export default Introduction
