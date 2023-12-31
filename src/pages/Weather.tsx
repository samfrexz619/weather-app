import { useEffect, useState } from "react";
import DailyForcast from "@/components/DailyForecast";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourForecast";
import TimeCard from "@/components/TimeCard";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/utils/weatherApi";
import { Forecast } from "@/lib/types";


const Weather = () => {

  const [weather, setWeather] = useState<Forecast>()

  const [location, setLocation] = useState('')

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setLocation(e.target.value)
  }

  const searchLocation =(e: React.KeyboardEvent<HTMLInputElement>)=> {
    if(e.key === 'Enter'){
      fetchWeather(location || 'nigeria')
        .then(res => setWeather(res.data))
        setLocation('')
    }
  }
  console.log(weather);
  
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
              ? <WeatherCard main={weather.main} detail={weather.weather[0]}/> 
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
 
export default Weather;