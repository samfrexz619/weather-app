import { useState, useEffect } from 'react';


const Clock = () => {

  const [time, setTime] = useState<string>('');

  const [currentDate, setCurrentDate] = useState('')

  useEffect(()=> {
    const now = new Date()

    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      // year: 'numeric', 
      day: 'numeric',
      month: 'long'
    };

    const formattedDate = now.toLocaleDateString(undefined, options);

    // const month = now.toLocaleString('default', { month: 'long' });
    // const day = now.getDate();
    // const year = now.getFullYear();

    // const formattedDate = `${month} ${day}, ${year}`;

    setCurrentDate(formattedDate);
  }, [])

  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12; 

    const time = `${formattedHours}:${minutes}${amPm}`;
    setTime(time);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-center py-5">
      <h2 className="font-bold text-60 leading-tight">
        { time }
      </h2>
      <small>{ currentDate }</small>
    </div>
  )
}

export default Clock