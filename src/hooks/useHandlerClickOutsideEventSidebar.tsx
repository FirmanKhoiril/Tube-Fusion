import { RefObject, useEffect, useRef } from 'react'
import { useGlobalState } from '../context/useStore';

export default function useHandlerClickOutsideEventSidebar() {
    const { setToogleSidebar } = useGlobalState();
    const sidebarRef: RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
          setToogleSidebar(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [setToogleSidebar]);
  
  return {
    sidebarRef
  }
}
