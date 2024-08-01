import { useState } from "react"
import { IoIosSearch } from "react-icons/io";
import {motion} from 'framer-motion'


const SearchMobile = () => {
    const [expandSearchBarMobile, setExpandSearchBarMobile] = useState(false)

  return (
    <>
    <form className={`sm:hidden w-full`}>
         <button type="button" onClick={( ) => setExpandSearchBarMobile(true)} className="p-2 bg-gray-100/5 shadow-sm hover:bg-gray-100/10 transition duration-150 rounded-full">
            <IoIosSearch size={24} className="icon" />
        </button>
        
    </form>

    {expandSearchBarMobile && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed z-50 left-2 top-0 transform -translate-x-1/2 mt-3 w-[96.6%] px-4 py-2 rounded-full flex  bg-dark-0 origin-center"
                >
                    <input
                        type="text"
                        className="w-full bg-dark-0 pr-4 pl-7 text-gray-200 outline-none text-[14px] p-2 rounded-full"
                        placeholder="Search..."
                    />
                </motion.div>
            )}

    </>
    
  )
}

export default SearchMobile