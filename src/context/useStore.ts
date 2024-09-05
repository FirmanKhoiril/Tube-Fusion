import { create } from 'zustand'

interface IGlobalState {
    toogleSidebar: boolean
    setToogleSidebar: (toogleSidebar: boolean) => void
    setShowSearchSuggestion: (showSearchSuggestion: boolean) => void
    showSearchSuggestion: boolean
    timePeriod: string
    setTimePeriod: (timePeriod: string) => void
}
export const useGlobalState = create<IGlobalState>((set) => ({
  toogleSidebar: false,
  setToogleSidebar: (toogleSidebar: boolean) => set({ toogleSidebar }),
  showSearchSuggestion: false,
  setShowSearchSuggestion: (showSearchSuggestion: boolean) => set({ showSearchSuggestion}),
  timePeriod: "3h",
  setTimePeriod: (timePeriod: string) => set({ timePeriod })
}))
