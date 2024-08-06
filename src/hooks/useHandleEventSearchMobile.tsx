import  { RefObject, useEffect, useRef, useState } from 'react'

export default function useHandleEventSearchMobile() {
    const [expandSearchBarMobile, setExpandSearchBarMobile] = useState(false)
    const searchBarMobileRef: RefObject<HTMLFormElement> = useRef(null);

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (searchBarMobileRef.current && !searchBarMobileRef.current.contains(e.target as Node)) {
          setExpandSearchBarMobile(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [setExpandSearchBarMobile]);
  
  return {
    searchBarMobileRef, setExpandSearchBarMobile, expandSearchBarMobile
  }
}
