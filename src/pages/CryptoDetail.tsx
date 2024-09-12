import { useParams } from "react-router-dom";
import useGetCryptoDetail from "../hooks/useGetCryptoDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useGetCryptoHistory from "../hooks/useGetCryptoHistory";
import ChangeTimePeriod from "../components/ChangeTimePeriod";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import millify from "millify";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { GoHeart, GoHeartFill  } from "react-icons/go";
import WithMetaTag from "../utils/withMetaTag";
import LineCharts from "../components/LineCharts";
import { TLinks } from "../types/Interface";
import { useGlobalState } from "../context/useStore";

const CryptoDetail = () => {
  const {setTimePeriod, timePeriod} = useGlobalState()
  const [likeCoin, setLikeCoin] = useState(false)
  const { uuid } = useParams();

  const { data, isError, isFetching, isLoading } = useGetCryptoDetail({
    uuid,
  });
  
  const {
    data: coinHistory,
    isFetching: fetchingCoinHistory,
    isLoading: loadingCoinHistory,
    isError: errorCoinHistory,
  } = useGetCryptoHistory({
    uuid, timePeriod
  });
  const detail =  data?.data?.coin

  if (isError || errorCoinHistory) return <Error />;

  if (isFetching || isLoading) return <Loading width={100} height={100} isLoading />;

  const coinChangePositive = parseFloat(detail.change) >= 0;
  const coinColorClass = coinChangePositive ? 'text-green-400' : 'text-red-600';
  
  return (
  <WithMetaTag link={`https://fusioner.vercel.app/crypto/${uuid}`} title={`Fusioner: ${detail?.name} - ${detail?.description}`} desc={`Explore detailed insights on ${detail?.name} including its current price, market cap, trading volume, and historical performance. Stay updated with live price charts and take advantage of buying or selling options on Fusioner.`} keywords={`Fusioner, ${detail?.name}, ${detail?.symbol}, crypto price, cryptocurrency details, market cap, buy crypto, sell crypto, crypto charts, ${detail?.name} insights`}>
    <div className="pt-[92px] px-2 sm:pt-24 container mx-auto grid gap-4 sm:gap-10 min-h-screen sm:px-3 pb-2 w-full grid-cols-1 lg:grid-cols-2">
  {/* Coin Details Section */}

  <div className="flex flex-col px-3 py-4 rounded-lg gap-3 sm:gap-6">
    {/* Header with Icon and Name */}
    <div className="flex items-center gap-3">
      <LazyLoadImage width={40} height={40} src={detail.iconUrl} />
      <h1 className="text-2xl font-bold tracking-wide">
        {detail.name}&nbsp;
        <span className="text-lg">({detail.symbol})</span>
      </h1>
      {detail.supply.confirmed && <TbRosetteDiscountCheckFilled size={20} />}
    </div>

    {/* Description */}
    <p className="text-white/70 sm:text-base text-sm">{detail.description}</p>

    {/* Statistics Section */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80">
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Market Cap</p>
        <p>${millify(detail.marketCap)}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Volume (24h)</p>
        <p>${millify(detail["24hVolume"])}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">All Time High (daily avg.)</p>
        <p>${millify(detail.allTimeHigh.price)}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Supply</p>
        <p>{millify(detail.supply.total)} {detail.symbol}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Max Supply</p>
        <p>{millify(detail.supply.max)} {detail.symbol}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Fully diluted market cap</p>
        <p>{millify(detail.fullyDilutedMarketCap)} {detail.symbol}</p>
      </div>
    </div>

    {/* Official Links Section */}
    <div>
      <h1 className="font-bold tracking-wide pb-2 text-xl">Official Links</h1>
      <div className="flex flex-wrap gap-6">
        {detail.links?.map((link: TLinks) => (
          <div className="flex flex-col gap-1" key={link.name}>
            <p className="text-xs sm:text-sm font-semibold text-white/80">{link.type}</p>
            <a href={link.url} target="_blank" className="text-blue-400 font-semibold hover:underline" >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Chart Section */}
  <div className="w-full px-3 py-4 rounded-lg h-full">
    <div className="flex w-full justify-between items-center mb-4">
      <div className="flex items-center text-[14px] sm:text-base gap-4">
        <p>Change: <span className={`${coinColorClass} font-semibold tracking-wider`}>{detail.change}%</span></p>
        <p>{detail.name} Price: ${millify(detail.price)}</p>
      </div>
      <ChangeTimePeriod value={timePeriod} functionCTP={(e) => setTimePeriod(e.currentTarget.value)} />
    </div>
    <div className="w-full border-b border-white/5 pb-3 h-full max-h-[400px] sm:max-h-[400px]">
      {fetchingCoinHistory || loadingCoinHistory ? (
        <div className="w-full h-[200px] sm:h-[400px] flex items-center justify-center">
          <Loading width={50} height={50} />
        </div>
      ) : (
        <LineCharts coinHistory={coinHistory} name={detail?.name} />
      )}
    </div>

    <div className="flex w-full pt-4 justify-between">
      <div className="flex gap-3">
        <button type="button" name={`Buy ${detail.name}`} className="px-8 py-2 text-white rounded-md hover:bg-green-600 bg-green-700">
          Buy
        </button>
        <button type="button" name={`Sell ${detail.name}`} className="px-8 py-2 text-white rounded-md hover:bg-red-600 bg-red-700">
          Sell
        </button>
      </div>
      <div className="flex gap-3">
        <button type="button" name={`Add to Watchlist ${detail.name}`} className="px-4 py-2 bg-[#2c2b33] flex items-center gap-2 text-white rounded-md hover:bg-[#33323b]">
          <BsFillBookmarkPlusFill size={18} /> <span className="hidden sm:inline-block">Add to Watchlist</span>
        </button>
        <button type="button" onClick={() => setLikeCoin((prev) => !prev)} name={`Love ${detail.name}`} className="py-2 max-w-[44px] w-full px-3 bg-[#2c2b33] flex items-center gap-2 text-white rounded-md hover:bg-[#33323b]">
          {likeCoin ? <GoHeartFill size={24} color="#f87171" /> : <GoHeart size={24} />}
        </button>
      </div>
    </div>
  </div>
</div>

    </WithMetaTag>
  );
};

export default CryptoDetail;
