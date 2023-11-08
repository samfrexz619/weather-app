import sunny from '@/assets/images/sunshine.svg';
import cloud from '@/assets/images/cloud.svg'
import rain from '@/assets/images/rain.svg'
import mist from '@/assets/images/mist.svg'
import { Detail, Main } from '@/lib/types';



interface Props {
  main?: Main;
  detail?: Detail;
}


const WeatherCard = ({ main, detail }: Props) => {
  return (
    <div className="min-h-260 py-4 bg-card rounded-30 dark:bg-[#444] shadow-box w-full">
      <div className="w-95 mx-auto py-4 flex gap-x-5 text-text dark:text-white">
        <div>
          <h2 className="text-grad bg-txt_lit font-bold text-[72px] dark:bg-txt_dak leading-none">{main?.temp || '45'}°F
          </h2>
          <small>Feels like: <span>{main?.feels_like || '85'}°F</span></small> <br />
        </div>
        <div className='text-center h-full'>
          {
            detail?.description === 'light rain'
            ? <img src={rain} alt="sun image" className='w-[160px]' />
            : detail?.description === 'scattered clouds'
            ? <img src={mist} alt='mist' className='w-[160px]' />
            : detail?.description === 'overcast clouds' || detail?.description === 'broken clouds' || detail?.description === 'few clouds'
            ? <img src={cloud} alt='cloud' className='w-[160px]' />
            : <img src={sunny} alt="sun image" className='w-[160px]' />
          }
          <p className='text-2xl font-bold text-center'>
          { detail?.description || 'sunny'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard