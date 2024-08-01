import { useGlobalState } from "../context/useStore"
import { IoClose  } from "react-icons/io5";

const Sidebar = () => {
  const {toogleSidebar,setToogleSidebar} = useGlobalState()

  return (
    <aside className={`absolute w-[90%] sm:w-[300px] drop-shadow-sm transition duration-300 mx-auto bg-dark-0 flex items-start pr-4 sm:px-3 sm:py-4 pl-6 py-5 ${toogleSidebar ? 'translate-x-[0%]' : "translate-x-[-100%]"}  flex-col gap-4 h-screen z-50`}>
        <button type='button'  onClick={() => setToogleSidebar(false)}className="p-2">
          <IoClose  size={24} className="icon"  />
        </button> 
    </aside>
  )
}

export default Sidebar