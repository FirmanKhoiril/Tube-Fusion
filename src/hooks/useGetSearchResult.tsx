import { useQuery } from "@tanstack/react-query"
import { FetchCrypto } from "../api/fetchCoinMarketCap"

type TSearchParams = {
    search?: string | null
}

export default function useGetSearchResult({search}: TSearchParams) {
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useQuery({
        queryKey: ['projects', search],
        queryFn: () => FetchCrypto(`coins?limit=50&orderBy=marketCap&offset=0&search=${search}`),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
      })

      return {
        isError, isLoading, isFetching, error, data
      }
}
