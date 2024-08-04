import { IoIosSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoClose  } from "react-icons/io5";
import { useEffect, useState } from "react";

const SearchBar = () => {
    const [showClearButton, setShowClearButton] = useState(false);
    const [inputSearch, setInputSearch] = useSearchParams({
        search: ""
    })
    const query = inputSearch.get("search")  || ""
    const navigate = useNavigate()
    useEffect(() => {
      if(query.length !== 0) {
        setShowClearButton(true)
      }
      return () => {
        setShowClearButton(false)
      }
    }, [query])
    const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate(`/${query}`)
    }
  return (
    <form onSubmit={onSubmitSearch} className=" relative w-full g px-2 hidden sm:inline-block "> 
        <input type="text" value={query} onChange={(e) => setInputSearch(prev => {
            prev.set("search", e.target.value)
            return prev
        }, {
            replace: true
        })}
        placeholder="Search Coin"
        className="w-full peer text-gray-200 text-[14px] bg-dark-0 min-w-[240px] focus:border-gray-600 border-transparent border-2 pl-12 pr-10 py-3 outline-none md:min-w-[270px] lg:min-w-[300px] shadow-sm rounded-full " />
        <button type="submit"  className="absolute top-[10px] left-5 peer-focus:text-gray-200/70 transition duration-150 text-gray-400/70">
            <IoIosSearch size={24} />
        </button>
        {query.length !== 0 && (
            <button type="button" className={`${showClearButton ? "opacity-100" : " opacity-0"} transition ease-in-out duration-200`}>
            <IoClose size={24} onClick={() => setInputSearch((prev) => {
                prev.set("search", "")
                return prev
            })} className="absolute top-[10px] right-5 icon" />
        </button>
        )}
    </form>
  )
}

export default SearchBar