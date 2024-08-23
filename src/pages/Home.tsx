import { Link } from "react-router-dom"
import Card from "../components/Card"
import useGetCryptoCoinLists from "../hooks/useGetCryptoCoinLists"
import { ICryptocurrency } from "../types/Interface"
import StatisticCryptoGlobal from "../components/StatisticCryptoGlobal"
import Error from "../components/Error"
import CustomScrollToTop from "../components/ScroolToTop"
import SkeletonCard from "../components/SkeletonCard"
import Welcome from "../components/Welcome"


const Home = () => {
  const { data, isError, isLoading, limitCoin } = useGetCryptoCoinLists();

  if (isError) return <Error />;

  return (
    <section className="w-full h-full mx-auto flex-col gap-4 container flex">
      <Welcome />
      <div>
            <h1 className="text-lg sm:text-xl font-medium">Statistic Crypto Global</h1>
            <StatisticCryptoGlobal isLoading={isLoading} {...data?.data?.stats} />
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