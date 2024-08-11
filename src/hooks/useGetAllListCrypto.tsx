import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchCrypto } from "../api/fetchCoinMarketCap";
import { ICryptocurrency } from '../types/Interface';


type TParams = {
  tag: string,
  timePeriod: string | null
}

export default function useGetAllListCrypto({tag, timePeriod}: TParams) {
  const getDataCrypto = async (pageParam: number | any): Promise<ICryptocurrency[]> => {
    const res = await FetchCrypto(`coins?limit=50&${tag !== "" && tag !== "all" ? `tags[]=${tag}&` : ""}orderBy=marketCap&timePeriod=${timePeriod}&offset=` + pageParam);
    return res;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<ICryptocurrency[], Error>({
    queryKey: ['filtersPagination', tag, timePeriod],
    queryFn:  ({ pageParam = 0 }) => getDataCrypto(pageParam),
    getNextPageParam: (pages, lastPage) => {
      console.log(pages)
      return lastPage && lastPage.length > 0 ? lastPage.length * 50 : undefined;
    },
    staleTime: 60 * 60 * 30,
    refetchInterval: 60 * 60 * 30,
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  });

  return {
    isError: error,
    isLoading: isFetching,
    isFetching,
    error,
    data,
    fetchNextPage,
    hasNextPage,isSuccess,
    isFetchingNextPage,
    status
  }
}
