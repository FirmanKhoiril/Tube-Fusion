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
import useGetFilterTag from "../hooks/useGetFilterTag"
import WithMetaTag from "../utils/withMetaTag"

const SearchFilter = () => {
  const {tag, timePeriodValue} = useGetFilterTag()

    const {data, isError, isFetching, isLoading, isFetchingNextPage, isSuccess, fetchNextPage, hasNextPage } = useGetAllListCrypto({
      tag, timePeriod: timePeriodValue
    })

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
    <WithMetaTag 
      title="Fusioner: Categories Cryptocurrency Markets"
      keywords="Fusioner, cryptocurrency categories, crypto market search, categories crypto by tag, crypto market trends, cryptocurrency data"
      desc="Use Fusioner's search categories to explore and categories cryptocurrency markets by tags, time periods, and more. Find popular or specific cryptocurrencies that match your criteria."
      link="https://fusioner.vercel.app/cryptocurrency/filter"
    >
      <div className="w-full pt-[88px] container mx-auto px-2 h-full flex-col gap-4 flex">     
      <Filter />
      <h1 className="text-lg sm:text-xl font-medium capitalize">Market {tag === "all" ? "Popular" : tag}</h1>
      {isLoading && isFetching && <Loading width={100} height={100} isLoading />}
        {isSuccess && (
            <div className="flex flex-col gap-4 pb-4">
            {data?.pages.map((page: any) => page.data?.coins.map((coin: ICryptocurrency) => (
                 <Card key={coin.rank + coin.uuid} coin={coin} /> 
            )))}
        </div>
        )}
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
    </WithMetaTag>
  )
}

export default SearchFilter