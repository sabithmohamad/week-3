import React, { createContext, useContext, useState } from 'react'
import './App.css'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Toolbar />
    </ThemeContext.Provider>
    </>
  )
}

  function Toolbar(){
    return (
      <Button />
    )
    
  }

  function Button() {
    const {theme, setTheme} = useContext(ThemeContext)

    return(
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light" )}>current theme : {theme}</button>
    )

  }

export default App
