import { useQuery } from "@tanstack/react-query";
import { FetchCrypto } from "../api/fetchCoinMarketCap";

export type TUuid = {
    uuid: string | any
    timePeriod: string
}

export default function useGetCryptoHistory({uuid, timePeriod}: TUuid) {
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useQuery({
        queryKey: ['CryptoHistory', timePeriod, uuid],
        queryFn: () => FetchCrypto(`coin/${uuid}/history?timeperiod=${timePeriod}`),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      return {
        isError, isLoading, error, data, isFetching
      }
}
