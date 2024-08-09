import { useEffect } from "react"
import Card from "../components/Card"
import Error from "../components/Error"
import Loading from "../components/Loading"
import useGetAllListCrypto from "../hooks/useGetAllListCrypto"
import { ICryptocurrency } from "../types/Interface"
import { useInView } from "react-intersection-observer";
import { Triangle } from "react-loader-spinner"
import CustomScrollToTop from "../components/ScroolToTop"
import Filter from "../components/Filter"



const SearchFilter = () => {
    const {data, isError, isFetching, isLoading, isFetchingNextPage, isSuccess, fetchNextPage, hasNextPage } = useGetAllListCrypto()

    const { ref, inView } = useInView({
      threshold: 0,
      rootMargin: "300px",
      delay: 150,
      root: null,
    });
    
    if(isError) return <Error />

    const handleNextPage = () => {
      if (inView) fetchNextPage();
    };
  
    useEffect(() => {
      if (inView) fetchNextPage();
    }, [isFetchingNextPage, isLoading, fetchNextPage, inView]);

  return (
    <div className="w-full mx-auto container  pt-[88px] h-full flex-col gap-4 flex">
      
        <Filter />
      {isLoading && isFetching && <Loading width={100} height={100} isLoading />}
        {isSuccess && <div className="flex flex-col gap-4  pb-4 pt-2 pr-4 sm:pr-0">
            {data?.pages.map((page: any) => page.data?.coins.map((coin: ICryptocurrency) => (
                 <Card key={coin.rank + coin.uuid} coin={coin} /> 
            )))}
        </div>}
        <div>
        {hasNextPage && (
                <button type="button" className="flex items-center w-full justify-center h-20" ref={ref} onClick={handleNextPage}>
                  {isFetchingNextPage ? <Triangle
            visible={true}
            height={50}
            width={50}
            color="#10b981"
            ariaLabel="triangle-loading"
          />: ""}
                </button>
              )}
      </div>
     <CustomScrollToTop />
    </div>
  )
}

export default SearchFilter