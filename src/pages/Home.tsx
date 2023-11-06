import { useEffect, useState } from "react";
import DailyForcast from "@/components/DailyForecast";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourForecast";
import TimeCard from "@/components/TimeCard";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/services/weatherApi";
import { Weather } from "@/lib/types";


const HomePage = () => {

  const [weather, setWeather] = useState<Weather>()

  const [location, setLocation] = useState('')

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setLocation(e.target.value)
  }

  // const getData =()=> {
  //   fetchWeather(location || 'nigeria')
  //       .then(res => setWeather(res.data))
  // }

  const searchLocation =(e: React.KeyboardEvent<HTMLInputElement>)=> {
    if(e.key === 'Enter'){
      fetchWeather(location || 'nigeria')
        .then(res => setWeather(res.data))
        setLocation('')
    }
  }

  // const forecast = weather?.main ? weather.main : ''

  useEffect(()=> {
  },[])

  return ( 
    <main className="w-full font-poppins bg-pry dark:bg-bgg">
      <section className="w-[93%] mx-auto min-h-screen">
        <Header 
          handleInput={handleInput} 
          location={location} 
          searchLocation={searchLocation}
        />
        <div className="py-7 md:flex justify-between w-full gap-x-10">
          <div className="md:w-[35%] py-5 md:py-0 w-10/12 mx-auto md:mx-0">
            <TimeCard />
          </div>
          <div className="md:w-[65%] w-full">
            {
              weather?.main 
              ? <WeatherCard main={weather.main}/> 
              : <WeatherCard />
            }
            
          </div>
        </div>

        <div className="py-4 lg:flex justify-between gap-x-10">
          <div className="md:w-[30%] w-full py-5 md:py-0">
            <DailyForcast  />
          </div>
          <div className="w-full md:w-[70%]">
            <HourlyForecast  />
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default HomePage;