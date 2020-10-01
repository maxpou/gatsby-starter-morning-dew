import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext'
import MoonIcon from './icons/moon.svg'
import SunIcon from './icons/sun.svg'

const DarkModeButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 8px 10px;
  color: #ffffff;
  font-weight: 700;
  margin: 10px 0;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
`

const DarkToggle = ({ isExpanded = false }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const toggleMode = () =>
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  const oppositeColor = colorMode === 'light' ? 'dark' : 'light'

  return (
    <DarkModeButton
      onClick={toggleMode}
      aria-label={`Activate ${oppositeColor} mode`}
    >
      {colorMode === 'dark' ? (
        <img src={SunIcon} alt="sun logo" />
      ) : (
        <img src={MoonIcon} alt="moon Logo" />
      )}
      {isExpanded && `Toggle ${oppositeColor} mode`}
    </DarkModeButton>
  )
}

export default DarkToggle
