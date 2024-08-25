import { useGlobalState } from "../context/useStore";
import { IoClose } from "react-icons/io5";
import { FaHome, FaFilter, FaEnvelope, FaFileAlt, FaChartLine, FaCog, FaInfoCircle, FaUser, FaBell, FaQuestionCircle } from "react-icons/fa";
import useHandlerClickOutsideEventSidebar from "../hooks/useHandlerClickOutsideEventSidebar";
import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { toogleSidebar, setToogleSidebar } = useGlobalState();
  const { user } = useUser();
  const { sidebarRef } = useHandlerClickOutsideEventSidebar();

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Categories', path: '/cryptocurrency/filter', icon: <FaFilter /> },
    { name: 'Market Overview', path: '/market', icon: <FaChartLine /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'Notifications', path: '/notifications', icon: <FaBell /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Terms of Conditions', path: '/term-of-condition', icon: <FaFileAlt /> },
    { name: 'Help Center', path: '/support-center', icon: <FaQuestionCircle /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  return (
   <>
    <div className={`${toogleSidebar ? "block" : "hidden"} w-full h-screen bg-black/20 fixed z-50`}></div>
     <aside
      ref={sidebarRef}
      className={`fixed top-0 w-[70%] sm:w-[300px] drop-shadow-lg transition-transform duration-300 mx-auto bg-dark-0 flex items-start pr-4 sm:px-3 sm:py-4 pl-6 py-5 ${
        toogleSidebar ? 'translate-x-0' : '-translate-x-full'
      } flex-col gap-6 h-screen z-[60]`}
    >
      <div className="flex flex-row items-center gap-6 w-full">
        <button
          type="button"
          onClick={() => setToogleSidebar(false)}
          className="p-2 text-gray-300 hover:text-white"
        >
          <IoClose size={24} className="icon" />
        </button>
        <h1 className="tracking-wider font-semibold text-lg">
          Hi, <span className="text-primary-0 font-bold cinzel">{user?.firstName || "Guest"} {user?.lastName || ""}</span>
        </h1>
      </div>
      <nav className="mt-8">
        <ul className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={() => setToogleSidebar(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-0 ${
                    isActive ? "bg-primary-0 text-white" : "text-gray-300"
                  }`
                }
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
   </>
  );
};

export default Sidebar;
