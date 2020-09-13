import React from 'react'

import { ThemeProvider } from '../ThemeContext'

function App({ children }) {
  return (
    <ThemeProvider>
      {/* <GlobalStyles /> */}
      {children}
    </ThemeProvider>
  )
}

export default App
