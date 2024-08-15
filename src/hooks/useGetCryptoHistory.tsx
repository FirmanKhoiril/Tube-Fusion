import { useQuery } from "@tanstack/react-query";
import { FetchCrypto } from "../api/fetchCoinMarketCap";
import { useState } from "react";


export type TUuid = {
    uuid: string | any
}

export default function useGetCryptoHistory({uuid}: TUuid) {
    const [timePeriod, setTimePeriod] = useState("24h")
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useQuery({
        queryKey: ['CryptoDetails', timePeriod, uuid],
        queryFn: () => FetchCrypto(`coin/${uuid}/history?timeperiod=${timePeriod}`),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      return {
        isError, isLoading, error, data, isFetching, setTimePeriod,timePeriod
      }
}
