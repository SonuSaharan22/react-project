import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react';
import Card from './components/Card';
import Theme from './components/Theme';

function App() {
  const [themeMode,setThemeMode] = useState("light");

  function lightTheme(){
    setThemeMode("light");
  }

  function darkTheme(){
    setThemeMode("dark");
 }

  useEffect(()  =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode] )

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <Theme />
                     </div>
                    <Card/>
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
      </div>
    </ThemeProvider>
  )
}

export default App
