import { useGlobalState } from "../context/useStore";
import { IoClose } from "react-icons/io5";
import useHandlerClickOutsideEventSidebar from "../hooks/useHandlerClickOutsideEventSidebar";
import { useUser } from "@clerk/clerk-react";

const Sidebar = () => {
  const { toogleSidebar, setToogleSidebar } = useGlobalState();
  const {user} = useUser()
  const {sidebarRef} = useHandlerClickOutsideEventSidebar()

  return (
    <aside
      ref={sidebarRef}
      className={`absolute w-[90%] sm:w-[300px] drop-shadow-sm transition duration-300 mx-auto bg-dark-0 flex items-start pr-4 sm:px-3 sm:py-4 pl-6 py-5 ${
        toogleSidebar ? 'translate-x-[0%]' : 'translate-x-[-100%]'
      } flex-col gap-4 h-screen z-50`}
    >
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => setToogleSidebar(false)}
          className="p-2"
        >
          <IoClose size={24} className="icon" />
        </button>
        <div className="">
          <h1 className="tracking-wider  font-semibold text-lg">Hi, <span className="text-primary-0 font-bold cinzel">{user?.firstName || "Guest"} &nbsp;</span>{user?.lastName || ""}</h1>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
