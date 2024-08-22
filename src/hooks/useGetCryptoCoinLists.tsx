import { useQuery } from "@tanstack/react-query"
import { FetchCrypto } from "../api/fetchCoinMarketCap"
import { useState } from "react"

export default function useGetCryptoCoinLists() {
    const [limitCoin, setLimitCoin] = useState(20)
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useQuery({
        queryKey: ['projects'],
        queryFn: () => FetchCrypto(`coins?limit=${limitCoin}&orderBy=marketCap`),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })

      return {
        isError, isLoading, isFetching, error, data, setLimitCoin, limitCoin
      }
}
