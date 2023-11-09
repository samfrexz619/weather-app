import weatherApp from '@/assets/images/dark.png'

const HomePage = () => {

  return ( 
    <main className="w-full font-poppins bg-gray-50 dark:bg-bgg">
      <div className='w-[92%] mx-auto'>
        <section className='py-6 dark:text-white'>
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