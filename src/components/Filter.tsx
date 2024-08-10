import { PiSlidersHorizontalLight } from "react-icons/pi";
import { categories } from "../context/dummyData";
import { TFilterFunction } from "../types/Interface";



const Filter = ({tag, setFilterTag, filterTag}: TFilterFunction) => {

  return (
    <div className="w-full  flex justify-between gap-2">

    <div className="flex items-center  gap-2 w-full">
        <button className="py-2 px-2.5 hover:bg-primary-0/60 transition duration-200 ease-in-out shadow-sm hover:shadow-lg bg-primary-0/80 text-sm rounded-md flex items-center gap-1" type="button">   
                <PiSlidersHorizontalLight size={18} /> Filters
            </button>   
        <div className="flex items-center gap-2 flex-row scrollbar-none overflow-x-auto w-full">
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
         
        </div>
    </div>
  )
}

export default Filter

