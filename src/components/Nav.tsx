import { NavLink } from "react-router-dom";

const Nav = () => {
  return ( 
    <header className="h-20 bg-gray-100 dark:bg-bgg border-solid border-b-2 border-gray-300 w-full">
      <nav className='h-full flex items-center justify-between w-[92%] mx-auto'>
        <NavLink to='/' className='text-2xl font-bold text-black dark:text-white italic'>
          WeatherAPP
        </NavLink>
        <div className='flex gap-x-4'>
          <NavLink to={'/weather'} className='font-bold hover:text-gray-500 text-black dark:text-white'>Weather</NavLink>
          <NavLink to={'/about'} className='font-bold text-black dark:text-white'>About</NavLink>
        </div>
      </nav>
    </header>
   );
}
 
export default Nav;