import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchCrypto } from "../api/fetchCoinMarketCap";
import { ICryptocurrency } from '../types/Interface';

export default function useGetAllListCrypto() {

  const getDataCrypto = async (pageParam: number | any): Promise<ICryptocurrency[]> => {
    const res = await FetchCrypto(`coins?limit=50&orderBy=marketCap&offset=` + pageParam);
    console.log(res)
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
    queryKey: ['projects'],
    queryFn:  ({ pageParam = 0 }) => getDataCrypto(pageParam),
    getNextPageParam: (pages, lastPage) => {
      console.log(pages)
        if(lastPage && lastPage?.length > 0) {
          return lastPage?.length * 50;
        } else {
          return undefined
        }

    },
    staleTime: 60 * 60 * 30,
    refetchInterval: 60 * 60 * 30,
    initialPageParam: 0  
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
