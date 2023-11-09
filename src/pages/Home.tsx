// import weatherApp from '@/assets/images/mock_up.png'
import { NavLink } from 'react-router-dom';

const HomePage = () => {

  return ( 
    <main className="w-full font-poppins bg-gray-50 dark:bg-bgg">
        <header className="h-20 border-solid border-b-2 border-gray-300 w-full text-black dark:text-white">
          <nav className='h-full flex items-center justify-between w-[92%] mx-auto'>
            <NavLink to='/' className='text-2xl font-bold'>WeatherAPP</NavLink>
            <div className='flex gap-x-4'>
              <NavLink to={'/weather'} className='font-bold hover:text-gray-500'>Weather</NavLink>
              <NavLink to={'#'} className='font-bold'>About</NavLink>
            </div>
          </nav>
        </header>
      <div className='w-[92%] mx-auto'>
        <section className="min-h-screen mt-16 bg-img dark:bg-dark_img">
          {/* <img src={weatherApp} alt="" /> */}
        </section>
      </div>
    </main>
   );
}
 
export default HomePage;