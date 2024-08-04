import { IoMenu  } from "react-icons/io5";
import Logo from './Logo';
import { useGlobalState } from '../context/useStore';
import SearchBar from "./SearchBar";
import Login from "./Login";
import SearchMobile from "./SearchMobile";


const Navbar = () => {
    const {setToogleSidebar} = useGlobalState()


  return (
    <nav className='py-2 container px-2.5 sm:px-4 sm:py-3 mt-3  w-full mx-auto flex items-center  sticky shadow-md z-40 bg-dark-0/50 rounded-full justify-between'>
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
  )
}

export default Navbar