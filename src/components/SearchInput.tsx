


interface Props {
  placeholder: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const SearchInput = ({ placeholder, type, value, handleChange }: Props) => {
  return ( 
    <div className="search w-[450px] bg-white dark:bg-pry">
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={handleChange}
        value={value}
      />
    </div>
   );
}
 
export default SearchInput;