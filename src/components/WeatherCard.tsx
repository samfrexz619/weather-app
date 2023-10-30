import sunny from '@/assets/images/sunshine.svg'


const WeatherCard = () => {
  return (
    <div className="h-260 bg-card rounded-30 dark:bg-[#444] shadow-box w-full">
      <div className="w-[95%] mx-auto py-4 flex h-full items-center">
        <div>
          <h2 className="text-grad">24&#8451;</h2>
        </div>
        <div className='text-center'>
          <img src={sunny} alt="sun image" className='w-[200px]' />
          <small>Sunny</small>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard