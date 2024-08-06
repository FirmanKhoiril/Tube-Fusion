import { useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io";
import {AnimatePresence, motion} from 'framer-motion'
import { IoClose,IoArrowBackOutline  } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";


const SearchMobile = () => {
    const [expandSearchBarMobile, setExpandSearchBarMobile] = useState(false)
    const [showClearButtonSearchMobile, setShowClearButtonSearchMobile] = useState(false);
    const [inputSearch, setInputSearch] = useSearchParams({
        search: ""
    })
    const query = inputSearch.get("search")  || ""
    const navigate = useNavigate()
    useEffect(() => {
      if(query.length !== 0) {
        setShowClearButtonSearchMobile(true)
      }
      return () => {
        setShowClearButtonSearchMobile(false)
      }
    }, [query])

    const handleSubmitSearching = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/${query}`)
    }

  return (
    <>
         <button type="button" onClick={( ) => setExpandSearchBarMobile(true)} className="sm:hidden inline-block p-1 text-white bg-gray-100/0 shadow-sm hover:bg-gray-100/5 transition duration-150 rounded-full">
            <IoIosSearch size={24} className="icon" />
        </button>
    <AnimatePresence>
        {expandSearchBarMobile && (
                <motion.form
                onSubmit={handleSubmitSearching}
                    initial={{ scaleY: 0, scaleX: 0 }}
                    animate={{ scaleY: 1, scaleX: 1 }}
                    exit={{ scaleY: 0, scaleX: 0 }}
                    transition={{ duration: 0.1 }}
                    className="fixed z-50 flex sm:hidden items-center justify-between left-2 top-0 transform -translate-x-1/2 mt-3 w-[96.6%]  rounded-full   bg-dark-0 origin-center"
                >
                    
                    <button type="button" onClick={( ) => setExpandSearchBarMobile(false)} className=" py-3.5 pl-4 pr-2 icon">
                        <IoArrowBackOutline size={22} className="" />
                    </button>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setInputSearch(prev => {
                            prev.set("search", e.target.value)
                            return prev
                        }, {
                            replace: true
                        })}
                        className="w-full bg-dark-0 pr-[52px] pl-3 placeholder:text-gray-400 focus:placeholder:text-gray-200 text-gray-200 outline-none text-[14px] py-4 rounded-full"
                        placeholder="Search Coin"
                    />
                    <button type="submit" className=" py-3.5 pl-2 pr-4 icon">
                        <IoIosSearch size={24} />
                    </button>
                    {query.length !== 0 && (
                    <button type="button" className={`${showClearButtonSearchMobile ? "opacity-100" : " opacity-0"} transition ease-in-out duration-200`}>
                        <IoClose size={24} onClick={() => setInputSearch((prev) => {
                            prev.set("search", "")
                            return prev
                        })} className="absolute top-[14px] right-14 icon" />
                    </button>
                    )}
                </motion.form>
            )}
    </AnimatePresence>
    </>
    
  )
}

export default SearchMobile