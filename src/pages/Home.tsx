import { Link } from "react-router-dom"
import Card from "../components/Card"
import useGetCryptoCoinLists from "../hooks/useGetCryptoCoinLists"
import { ICryptocurrency } from "../types/Interface"
import StatisticCryptoGlobal from "../components/StatisticCryptoGlobal"
import Error from "../components/Error"
// import Loading from "../components/Loading"
import CustomScrollToTop from "../components/ScroolToTop"

const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex space-x-4  py-5 px-4 sm:px-6 bg-[#2C2B33] rounded-lg">
      <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-2 bg-gray-500 rounded w-3/4"></div>
        <div className="h-2 bg-gray-500 rounded"></div>
        <div className="h-2 bg-gray-500 rounded w-5/6"></div>
      </div>
    </div>
  );
};


const Home = () => {
  const { data, isError, isLoading, limitCoin } = useGetCryptoCoinLists();

  if (isError) return <Error />;

  return (
    <section className="w-full h-full pt-[90px] mx-auto flex-col gap-4 container flex">
      <div>
            <h1 className="text-lg sm:text-xl font-medium">Statistic Crypto Global</h1>
            <StatisticCryptoGlobal {...data?.data?.stats} />
          </div>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-medium">{limitCoin} Market Crypto</h1>
            <Link
              to={"/cryptocurrency/filter"}
              className="text-sm transition duration-150 text-gray-500 hover:text-gray-400"
            >
              ...Show More
            </Link>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            {isLoading ? Array.from({ length: limitCoin }).map((_, index) => (
                <SkeletonCard key={index} />
              )) : data?.data?.coins.map((coin: ICryptocurrency) => (
                <Card key={coin.rank + coin.uuid} coin={coin} />
              ))}
          </div>
      <CustomScrollToTop />
    </section>
  );
};

export default Home;