import { Link } from "react-router-dom"
import Card from "../components/Card"
import useGetCryptoCoinLists from "../hooks/useGetCryptoCoinLists"
import { ICryptocurrency } from "../types/Interface"
import StatisticCryptoGlobal from "../components/StatisticCryptoGlobal"
import Error from "../components/Error"
import Loading from "../components/Loading"
import CustomScrollToTop from "../components/ScroolToTop"


const Home = () => {
  const {data, isError, isFetching, isLoading, limitCoin} = useGetCryptoCoinLists()

  if(isError) return <Error />
  
  if(isFetching && isLoading) return <Loading width={100} height={100} isLoading />

  return (
    <section className="w-full h-full pt-[90px] mx-auto flex-col gap-4 container flex">
      <div className="">
        <h1 className="text-lg sm:text-xl font-medium">Statistic Crypto Global</h1>
        <StatisticCryptoGlobal {...data?.data?.stats} />
      </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-medium">Top {limitCoin} Market Crypto</h1>
        <Link to={"/cryptocurrency/filter"} className="text-sm transition duration-150 text-gray-500 hover:text-gray-400">
          ...Show More
        </Link>
      </div>
      <div className="flex flex-col gap-4 pb-4">
        {data?.data?.coins.map((coin: ICryptocurrency) => (
          <Card key={coin.rank + coin.uuid} coin={coin} />
        ))}         
      </div>
      <CustomScrollToTop />
    </section>
  )
}

export default Home