import { PiSlidersHorizontalLight } from "react-icons/pi";
import { categories, timePeroidOptions } from "../context/dummyData";
import { TbClockRecord } from "react-icons/tb";
import FilterCard from "./FilterCard";
import useGetFilterTag from "../hooks/useGetFilterTag";

const Filter = () => {
  const {filterTag, setFilterTag, timePeriodValue} = useGetFilterTag()
  return (
    <div className="w-full flex flex-col justify-between gap-3">
      
      <div className="flex items-center justify-between gap-3 pr-2 w-full">

        <button
          className="flex items-center gap-1 bg-primary-0/80 hover:bg-primary-0/60 text-white text-sm font-medium py-2 px-3 rounded-md shadow-sm hover:shadow-lg transition duration-200 ease-in-out"
          type="button"
        >
          <PiSlidersHorizontalLight size={18} /> Filters
        </button>
        <div className="relative">
        <select
          className=" absolute top-0  opacity-0 h-full w-full text-black  bg-secondary-0  text-center  appearance-none cursor-pointer  focus:ring-2 focus:ring-[#10b981] focus:outline-none"
          onChange={(e) => {
            const newValue = e.currentTarget.value;
            const newParams = new URLSearchParams(filterTag);
            newParams.set("timePeriod", newValue);
            setFilterTag(newParams);
          }}
        >
          {timePeroidOptions.map((time, index) => (
            <option key={index} className="font-medium text-center py-2" value={time}>
               {time}
            </option>
          ))}
        </select>
        <button className="py-2 px-3 rounded-md shadow-sm hover:shadow-lg transition duration-200 ease-in-out bg-secondary-0 text-sm font-medium text-black flex items-center gap-1">
          <TbClockRecord size={18}/>
          {timePeriodValue}
        </button>
       
        </div>

      </div>
      <div className="flex w-full pb-2 flex-row overflow-x-auto items-center gap-4">
        {categories.map((category) => (
          <FilterCard {...category} key={category.name} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
