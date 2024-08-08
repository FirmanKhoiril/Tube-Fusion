import { IoMenu  } from "react-icons/io5";
import Logo from './Logo';
import { useGlobalState } from '../context/useStore';
import SearchBar from "./SearchBar";
import Login from "./Login";
import SearchMobile from "./SearchMobile";
import Headroom from 'react-headroom'

const Navbar = () => {

    const {setToogleSidebar} = useGlobalState()

    
  return (
    <Headroom>
      <nav className={`py-4 container top-2 px-3 sm:px-4 sm:py-3 mt-1  w-full mx-auto  items-center  sticky shadow-md z-40 bg-[#2b292e] flex  rounded-full justify-between`}>
        <div className="flex items-center gap-2 ">     
            <button type='button'  onClick={() => setToogleSidebar(true)} className="p-2 hover:text-white">
                <IoMenu  size={24}  className="icon" />
            </button> 
            <Logo />
        </div>
        <div className="flex items-center gap-2.5 max-w-[80px] sm:max-w-[372px] w-full sm:gap-3">
          <SearchMobile />
          <SearchBar />
          <Login />
        </div>
      </nav>
    </Headroom> 
  )
}

export default Navbar