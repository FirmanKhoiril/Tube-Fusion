import Card from "../components/Card"
import Error from "../components/Error"
import Loading from "../components/Loading"
import useGetAllListCrypto from "../hooks/useGetAllListCrypto"
import { ICryptocurrency } from "../types/Interface"


const SearchFilter = () => {
    const {data, isError, isFetching, isLoading, isFetchingNextPage, isSuccess, fetchNextPage, hasNextPage } = useGetAllListCrypto()

    if(isError) return <Error />
  
    if (isLoading && isFetching) return <Loading width={100} height={100} isLoading />

  return (
    <div className="w-full h-full flex-col gap-4 container mx-auto flex">
        {isSuccess && <div className="flex flex-col gap-4 pb-4">
            {data?.pages.map((page: any) => page.data?.coins.map((coin: ICryptocurrency) => (
                 <Card key={coin.rank + coin.uuid} coin={coin} />
            )))}
        </div>}
        <div>
            {isFetchingNextPage && <Loading width={50} height={50} isLoading />}
            {hasNextPage && (
            <button type="button" disabled={!hasNextPage} onClick={() => fetchNextPage()} name="buttonNext">
              Load More...
            </button>
          )}
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  )
}

export default SearchFilter