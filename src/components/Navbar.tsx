import { IoMenu  } from "react-icons/io5";
import Logo from './Logo';
import { useGlobalState } from '../context/useStore';
import SearchBar from "./SearchBar";
import Login from "./Login";
import SearchMobile from "./SearchMobile";

const Navbar = () => {
    const {setToogleSidebar} = useGlobalState()
    
  return (

      <nav className={`py-4  top-0 px-3 sm:px-2 sm:py-3  w-full fixed shadow-md z-40 bg-[#2b292e] left-0`}>
        <div className="w-full container flex justify-between mx-auto ">
          <div className="flex items-center gap-4 ">     
              <button type='button' name="Menu"  onClick={() => setToogleSidebar(true)} className="p-2 hover:text-white">
                  <IoMenu  size={24}  className="icon" />
              </button> 
              <Logo />
          </div>
          <div className="flex items-center gap-2.5 max-w-[80px] sm:max-w-[372px] w-full sm:gap-3">
            <SearchMobile />
            <SearchBar />
            <Login />
          </div>
        </div>
      </nav>

  )
}

export default Navbar