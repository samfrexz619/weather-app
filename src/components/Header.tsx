import { useState } from "react"
import SearchInput from "./SearchInput"
import ToggleSwitch from "./ToggleSwitch"
import useDark from "@/hooks/useDark"



interface Props {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  location: string;
  searchLocation: (e: React.KeyboardEvent<HTMLInputElement>)=> void;
}

const Header = ({ handleInput, location, searchLocation}: Props) => {

  const [colorTheme, setTheme] = useDark()

  const [isDark, setIsDark] = useState(colorTheme === 'light' ? true : false)

  const toggleMode =(checked: boolean)=> {
    setTheme(colorTheme)
    setIsDark(checked)
  }

  return (
    <header className="w-full">
      <div className="flex h-24 items-center gap-x-10 w-full">
        <div className="h-full flex items-center flex-col justify-center">
          <ToggleSwitch 
            isDark={isDark} 
            toggleMode={toggleMode} 
          />
          <small className="dark:text-white pt-1">
            { colorTheme !== 'light' ? 'Light mode' : 'Dark mode'}
          </small>
        </div>
        <div className="w-[500px]">
          <SearchInput 
            placeholder='Search for your preferred city...'
            type='search'
            value={location}
            handleChange={handleInput}
            searchLocation={searchLocation}
          />
        </div>
      </div>
    </header>
  )
}

export default Header