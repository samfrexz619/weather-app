
import Clock from "./Clock"



const TimeCard = () => {
  return (
    <div className="bg-card shadow-box h-260 w-full rounded-30 dark:bg-[#444]">
      <div className="text-text dark:text-white flex h-full flex-col items-center justify-center">
        <h4 className="font-bold text-2xl">Nigeria</h4>
        <Clock />
      </div>
    </div>
  )
}

export default TimeCard