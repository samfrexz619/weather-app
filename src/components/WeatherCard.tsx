import sunny from '@/assets/images/sunshine.svg';
import { Main } from '@/lib/types';



interface Props {
  main?: Main;
}


const WeatherCard = ({ main }: Props) => {
  return (
    <div className="min-h-260 py-4 bg-card rounded-30 dark:bg-[#444] shadow-box w-full">
      <div className="w-95 mx-auto py-4 flex gap-x-5 text-text dark:text-white">
        <div>
          <h2 className="text-grad bg-txt_lit font-bold text-[72px] dark:bg-txt_dak leading-none">{main?.temp || '45'}°F
          </h2>
          <small>Feels like: <span>{main?.feels_like || '85'}°F</span></small>
        </div>
        <div className='text-center h-full'>
          <img src={sunny} alt="sun image" className='w-[180px]' />
          <p className='text-3xl font-bold text-center'>Sunny</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard