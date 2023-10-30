import cloud from '@/assets/images/cloud.svg'
import drizzle from '@/assets/images/drizzle.svg'
import mist from '@/assets/images/mist.svg'
import rain from '@/assets/images/rain.svg'
import sunshine from '@/assets/images/sun.svg'


const DailyForecast = () => {
  return ( 
    <div className="min-h-[320px] w-full rounded-30 bg-card dark:bg-[#444] shadow-box">
      <div className="w-[95%] mx-auto py-4 text-text dark:text-white">
        <div>
          <h3 className="capitalize font-bold text-2xl text-center py-3">5 days forecast:</h3>
          <div>
            <div className='flex items-center justify-around px-2 py-2'>
              <img src={cloud} alt="" />
              <small>20&#8451;</small>
              <small>Friday, 1 sep</small>
            </div>
            <div className='flex items-center justify-around px-2 py-2'>
              <img src={drizzle} alt="" />
              <small>20&#8451;</small>
              <small>Friday, 1 sep</small>
            </div>
            <div className='flex items-center justify-around px-2 py-2'>
              <img src={mist} alt="" />
              <small>20&#8451;</small>
              <small>Friday, 1 sep</small>
            </div>
            <div className='flex items-center justify-around px-2 py-2'>
              <img src={rain} alt="" />
              <small>20&#8451;</small>
              <small>Friday, 1 sep</small>
            </div>
            <div className='flex items-center justify-around px-2 py-2'>
              <img src={sunshine} alt="" />
              <small>20&#8451;</small>
              <small>Friday, 1 sep</small>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default DailyForecast;