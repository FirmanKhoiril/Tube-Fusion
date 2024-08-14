import { create } from 'zustand'

interface IGlobalState {
    toogleSidebar: boolean
    setToogleSidebar: (toogleSidebar: boolean) => void
    showSearchSuggestion: boolean
    setShowSearchSuggestion: (showSearchSuggestion: boolean) => void
}
export const useGlobalState = create<IGlobalState>((set) => ({
  toogleSidebar: false,
  setToogleSidebar: (toogleSidebar: boolean) => set({ toogleSidebar }),
  showSearchSuggestion: false,
  setShowSearchSuggestion: (showSearchSuggestion: boolean) => set({ showSearchSuggestion})
}))
