import { useState } from 'react'
import { IoClose, IoMenu  } from "react-icons/io5";


const Navbar = () => {
    const [toogleNavbar, setToogleNavbar] = useState(false)
  return (
    <nav className='p-4 w-full flex items-center justify-between sm:justify-around'>
        Test
        <div className="">
            {toogleNavbar ? <button type='button' onClick={() => setToogleNavbar(false)} className="p-2">
                <IoClose  size={24} />
            </button> : <button type='button'  onClick={() => setToogleNavbar(true)} className="p-2">
                <IoMenu  size={24} />
            </button>}
            
            
        </div>
    </nav>
  )
}

export default Navbar