import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import Logo from './Logo';
import { useGlobalState } from '../context/useStore';
import SearchBar from "./SearchBar";
import Login from "./Login";
import SearchMobile from "./SearchMobile";

const Navbar = () => {
  const { setToogleSidebar } = useGlobalState();
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg('bg-[#2b292e]');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`py-4 top-0 px-3 sm:px-2 sm:py-3 w-full fixed z-40 ${navbarBg} transition-colors duration-300 left-0`}>
      <div className="w-full container flex justify-between mx-auto">
        <div className="flex items-center gap-4">     
          <button
            type="button"
            name="Menu"
            onClick={() => setToogleSidebar(true)}
            className="p-2 hover:text-white"
          >
            <IoMenu size={24} className="icon" />
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
  );
};

export default Navbar;
