import { useState, useEffect } from "react";


 const useDark =(): [string, React.Dispatch<React.SetStateAction<string>>] => {
  
  const [theme, setTheme] = useState(localStorage.theme || 'light')

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(()=> {
    const root = document.documentElement;
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  },[theme, colorTheme])

  return [colorTheme, setTheme]
 }
export default useDark;