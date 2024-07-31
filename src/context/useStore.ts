import { create } from 'zustand'

interface IGlobalState {
    toogleSidebar: boolean
    setToogleSidebar: (toogleSidebar: boolean) => void  
}
export const useGlobalState = create<IGlobalState>((set) => ({
  toogleSidebar: false,
  setToogleSidebar: (toogleSidebar: boolean) => set({ toogleSidebar })  
}))
