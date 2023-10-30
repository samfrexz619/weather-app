import sun from '@/assets/images/sun.svg'
import nav_up from '@/assets/images/nav_up.svg'


interface Props {
  variant: 'orange' | 'grey';
}


const CardForecast = ({ variant }: Props) => {
  return ( 
    <div className={`${variant === 'orange' ? 'bg-orange' : 'bg-grey'} h-260 w-32 p-4 rounded-[40px] dark:bg-card_bg`}>
      <div className="text-text dark:text-white flex flex-col items-center">
        <h2 className="font-bold text-2xl">12:00</h2>
        <div>
          <img src={sun} alt="" />
        </div>
        <small>24&#8451;</small>
        <div>
          <img src={nav_up} alt="" />
        </div>
        <p className='font-bold text-2xl'>2km/h</p>
      </div>
    </div>
   );
}
 
export default CardForecast;