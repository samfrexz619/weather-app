import CardForecast from "./CardForecast";


const HourlyForecast = () => {
  return ( 
    <div className="bg-card rounded-30 dark:bg-[#444] shadow-box w-full py-4 dark:text-white">
      <div className="w-95 mx-auto px-2">
        <h2 className="font-bold text-2xl text-center py-3">Hourly Forecast:</h2>
        <div className="py-4 flex w-full gap-x-5 lg:justify-between flex-wrap gap-y-4">
          <CardForecast variant="orange" />
          <CardForecast variant="orange" />
          <CardForecast variant="orange" />
          <CardForecast variant="grey" />
          <CardForecast variant="grey" />
        </div>
      </div>
    </div>
   );
}
 
export default HourlyForecast; 