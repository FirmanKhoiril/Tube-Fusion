import { PiSlidersHorizontalLight } from "react-icons/pi";
import { BiGridSmall } from "react-icons/bi";
import { categories } from "../context/dummyData";


const Filter = () => {

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
                    className="flex items-center capitalize bg-black/20 px-3 py-2 rounded-md gap-1"
                    type="button"
                >
                  <BiGridSmall size={20} /> {category}
                </button>
                ))}
        </div>
         
        </div>
    </div>
  )
}

export default Filter

