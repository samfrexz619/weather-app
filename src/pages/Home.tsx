import { useEffect, useState } from "react";
import DailyForcast from "@/components/DailyForecast";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourForecast";
import TimeCard from "@/components/TimeCard";
import WeatherCard from "@/components/WeatherCard";
import { fetchForecast } from "@/services/weatherApi";



const HomePage = () => {

  const [weather, setWeather] = useState(null)

  const [location, setLocation] = useState('')

  const handleInput =(e: React.ChangeEvent<HTMLInputElement>)=> {
    setLocation(e.target.value)
  }

  const searchLocation =(e: React.KeyboardEvent<HTMLInputElement>)=> {
    if(e.key === 'Enter'){
      fetchForecast(location)
        .then(res => setWeather(res.data))
    }
  }

  useEffect(()=> {
  },[])

  console.log(weather)
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
            <TimeCard  />
          </div>
          <div className="md:w-[65%] w-full">
            <WeatherCard />
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