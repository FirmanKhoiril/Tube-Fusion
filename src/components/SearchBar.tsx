import { IoIosSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoClose  } from "react-icons/io5";
import { useEffect, useState } from "react";

const SearchBar = () => {
    const [showClearButton, setShowClearButton] = useState(false);
    const [inputSearch, setInputSearch] = useSearchParams({
        q: ""
    })
    const query = inputSearch.get("q")  || ""
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
    <form onSubmit={onSubmitSearch} className=" relative w-full px-2 hidden sm:inline-block ">
        <button type="submit">
            <IoIosSearch size={24} className="absolute top-[10px] left-5 icon" />
        </button>
        <input type="text" value={query} onChange={(e) => setInputSearch(prev => {
            prev.set("q", e.target.value)
            return prev
        }, {
            replace: true
        })}
        placeholder="Search"
        className="w-full text-gray-200 text-[14px] bg-dark-0 min-w-[240px] focus:border-gray-600 border-transparent border-2 pl-12 pr-10 py-3 outline-none md:min-w-[270px] lg:min-w-[300px] shadow-sm rounded-full " />
        {query.length !== 0 && (
            <button type="button" className={`${showClearButton ? "opacity-100" : " opacity-0"} transition ease-in-out duration-200`}>
            <IoClose size={24} onClick={() => setInputSearch((prev) => {
                prev.set("q", "")
                return prev
            })} className="absolute top-[10px] right-5 icon" />
        </button>
        )}
    </form>
  )
}

export default SearchBar