import DailyForcast from "@/components/DailyForcast";
import Header from "@/components/Header";
import TimeCard from "@/components/TimeCard";
import WeatherCard from "@/components/WeatherCard";

const HomePage = () => {
  return ( 
    <main className="w-full font-poppins bg-pry dark:bg-bgg">
      <section className="w-[1100px] mx-auto min-h-screen">
        <div className="w-[93%] mx-auto">
          <Header  />
          <div className="py-7 flex justify-between">
            <TimeCard  />
            <WeatherCard />
          </div>

          <div className="py-4">
            <DailyForcast  />
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default HomePage;