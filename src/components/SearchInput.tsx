


interface Props {
  placeholder: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  searchLocation: (e: React.KeyboardEvent<HTMLInputElement>)=> void;
}

const SearchInput = ({ placeholder, type, value, handleChange, searchLocation }: Props) => {
  return ( 
    <div className="search w-full bg-white dark:bg-pry">
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={handleChange}
        value={value}
        onKeyDown={searchLocation}
      />
    </div>
   );
}
 
export default SearchInput;