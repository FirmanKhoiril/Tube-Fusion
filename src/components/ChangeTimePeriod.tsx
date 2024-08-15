import { TbClockRecord } from "react-icons/tb"
import { timePeroidOptions } from "../context/dummyData"


export type TChangeTimePeriodParams = {
    functionCTP: (value: string) => void
    value: string | null
}

const ChangeTimePeriod = ({functionCTP, value}: TChangeTimePeriodParams) => {
  return (
    <div className="relative">
        <select
          className=" absolute top-0 max-w-[72px] w-full h-full  opacity-0 text-black  bg-secondary-0/5  text-center  appearance-none cursor-pointer  focus:ring-2 focus:ring-[#10b981] focus:outline-none"
          onChange={(e) => functionCTP(e.currentTarget.value)}
          >
          {timePeroidOptions.map((time, index) => (
            <option key={index} className="font-medium text-center py-2" value={time}>
               {time}
            </option>
          ))}
        </select>
        <button className="py-2 px-3 rounded-md shadow-sm hover:shadow-lg transition duration-200 ease-in-out bg-secondary-0/5 text-white text-sm font-medium flex items-center gap-1">
          <TbClockRecord size={18}/>
          {value}
        </button>
       
      </div>
  )
}

export default ChangeTimePeriod