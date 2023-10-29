import SearchInput from "./SearchInput"
import ToggleSwitch from "./ToggleSwitch"
import { useState } from "react"

const Header = () => {

  const [searchWord, setSearchWord] = useState('')

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearchWord(e.target.value)
  }

  return (
    <header className="w-full">
      <div className="flex h-20 items-center gap-x-10 w-full">
        <div className="h-full flex items-center">
          <ToggleSwitch />
        </div>
        <div>
          <SearchInput 
            placeholder='Search for your preferred city'
            type='search'
            value={searchWord}
            handleChange={handleInput}
          />
        </div>
      </div>
    </header>
  )
}

export default Header