import { PiSlidersHorizontalLight } from "react-icons/pi";
import { categories } from "../context/dummyData";
import { TFilterFunction } from "../types/Interface";
import { FaCaretDown } from "react-icons/fa";

const Filter = ({tag, setFilterTag, filterTag, timePeriodValue}: TFilterFunction) => {

  const timePeroidOptions = [
    '3h', '24h', '7d','30d', '3m', '1y', "3y", "5y"
  ];
         

  return (
    <div className="w-full  flex justify-between gap-2">

    <div className="flex items-center  gap-2 w-full">
          
        <div className="flex items-center justify-between gap-2 flex-row overflow-x-auto w-full">
            <div className="flex items-center gap-2 pr-6 md:pr-4 lg:pr-0">
              <button className="py-2 px-2.5 hover:bg-primary-0/60 transition duration-200 ease-in-out shadow-sm hover:shadow-lg bg-primary-0/80 text-sm rounded-md flex items-center gap-1" type="button">   
                <PiSlidersHorizontalLight size={18} /> Filters
              </button> 
              {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => {
                      const newParams = new URLSearchParams(filterTag);
                      newParams.set("tags", category.name);
                      setFilterTag(newParams);
                    }}
                    className={`${tag === category.name ? "text-primary-0 hover:text-primary-0/80" : "text-white"} flex items-center capitalize bg-black/20 transition duration-200 ease-in-out px-4 tracking-wide py-2 rounded-md gap-2`}
                    type="button"
                >
                 {category.icon} {category.name}
                </button>
                ))}
            </div>
            <div className="relative max-w-[67px] w-full">
                <button className={`py-2 px-2.5  justify-between text-black hover:bg-secondary-0 transition duration-200 ease-in-out shadow-sm hover:shadow-lg bg-secondary-0 text-sm rounded-md flex items-center font-medium w-full max-w-[67px]  gap-1`}>
                  {timePeriodValue} <FaCaretDown size={18} />
                </button>
                <select className="opacity-0 cursor-pointer appearance-none top-0 absolute max-w-[67px] w-full px-2 bg-secondary-0  text-black" onChange={(e) => {
                  const newParams = new URLSearchParams(filterTag);
                  newParams.set("timePeriod", e.currentTarget.value);
                  setFilterTag(newParams);
                }}>
                  {timePeroidOptions.map((time) => (
                    <option className="font-medium " value={time}>{time}</option>
                  ))}
                </select>
            </div>
        </div>
         
        </div>
    </div>
  )
}

export default Filter

