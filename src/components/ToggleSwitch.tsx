
interface Props {
  isDark: boolean;
  toggleMode: (checked: boolean)=> void;
}

const ToggleSwitch = ({ isDark, toggleMode }: Props) => {

  return ( 
    <label className='toggle'>
      <input 
        type="checkbox"
        checked={isDark} 
        onChange={e => toggleMode(e.target.checked)} 
      />
      <span className='toggle__slider'></span>
    </label>
   );
}
 
export default ToggleSwitch;