import { IoMenu  } from "react-icons/io5";
import Logo from './Logo';
import { useGlobalState } from '../context/useStore';


const Navbar = () => {
    const {setToogleSidebar} = useGlobalState()


  return (
    <nav className='py-2 container px-4 sm:py-3 mt-3  w-full mx-auto flex items-start  sticky shadow-md z-40 bg-dark-0/50 rounded-full justify-between'>
        <div className="flex items-center gap-3">     
            <button type='button'  onClick={() => setToogleSidebar(true)} className="p-2 hover:text-white">
                <IoMenu  size={24}  className="hover:text-gray-400 transition duration-150 text-gray-400/70" />
            </button> 
            <Logo />
        </div>
        test
    </nav>
  )
}

export default Navbar