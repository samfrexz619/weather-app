import { NavLink } from 'react-router-dom';
import weatherApp from '@/assets/images/dark.png'

const HomePage = () => {

  return ( 
    <main className="w-full font-poppins bg-gray-50 dark:bg-bgg">
        <header className="h-20 border-solid border-b-2 border-gray-300 w-full text-black dark:text-white">
          <nav className='h-full flex items-center justify-between w-[92%] mx-auto'>
            <NavLink to='/' className='text-2xl font-bold'>WeatherAPP</NavLink>
            <div className='flex gap-x-4'>
              <NavLink to={'/weather'} className='font-bold hover:text-gray-500'>Weather</NavLink>
              <NavLink to={'/about'} className='font-bold'>About</NavLink>
            </div>
          </nav>
        </header>
      <div className='w-[92%] mx-auto'>
        <section className='py-4 dark:text-white'>
          <p>
          WeatherApp combines a clean, modern design with powerful data sources to bring you reliable and visually appealing weather information. 
          Whether you're planning a weekend getaway or just want to know if you'll need an umbrella, WeatherApp has you covered.
          </p>
          <p>
          Use WeatherApp today 
          and experience weather forecasting like never before!
          </p>
        </section>
        <section className="min-h-screen py-4">
          <img src={weatherApp} alt="" />
        </section>
      </div>
    </main>
   );
}
 
export default HomePage;