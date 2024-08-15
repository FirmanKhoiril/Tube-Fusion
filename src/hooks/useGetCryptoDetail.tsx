import { useQuery } from "@tanstack/react-query";
import { FetchCrypto } from "../api/fetchCoinMarketCap";


export type TUuid = {
    uuid: string | any
}

export default function useGetCryptoDetail({uuid}: TUuid) {
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useQuery({
        queryKey: ['CryptoDetails', uuid],
        queryFn: () => FetchCrypto(`coin/${uuid}`),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      return {
        isError, isLoading, error, data, isFetching
      }
}
