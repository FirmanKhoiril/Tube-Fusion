import { useParams } from "react-router-dom";
import useGetCryptoDetail from "../hooks/useGetCryptoDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import useGetCryptoHistory from "../hooks/useGetCryptoHistory";
import ChangeTimePeriod from "../components/ChangeTimePeriod";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import millify from "millify";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { GoHeart, GoHeartFill  } from "react-icons/go";
import useManagedCryptoCharts from "../hooks/useManagedCryptoCharts";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoDetail = () => {
  const [timePeriod, setTimePeriod] = useState("3h")
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

  const {coinPrice, coinTimestamp} = useManagedCryptoCharts({coinHistory})

  const detail =  data?.data?.coin

  const dataCharts = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${detail?.name} price in USD`,
        data: coinPrice,
        fill: true,
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10b981",
        borderWidth: 2, 
        tension: 0.4, 
      },
    ],
  };


  if (isError || errorCoinHistory) return <Error />;

  if (isFetching || isLoading || fetchingCoinHistory || loadingCoinHistory) return <Loading width={100} height={100} isLoading />;

  const coinChangePositive = parseFloat(detail.change) >= 0;
  const coinColorClass = coinChangePositive ? 'text-green-400' : 'text-red-600';
  
  return (
    <div className="pt-[92px] sm:pt-24 mx-auto grid gap-4 sm:gap-10 sm:px-3 w-full grid-cols-1 lg:grid-cols-2">
  {/* Coin Details Section */}
  <div className="flex flex-col p-4 rounded-lg shadow-md bg-[#1e1d24] gap-3 sm:gap-6">
  {/* Header with Icon and Name */}
    <div className="flex items-center gap-3">
      <LazyLoadImage width={40} height={40} src={detail.iconUrl} />
      <h1 className="text-2xl font-bold tracking-wide">
        {detail.name}&nbsp;
        <span className="text-lg">({detail.symbol})</span>
      </h1>
        {detail.supply.confirmed ? <TbRosetteDiscountCheckFilled  size={20} /> : ""}
    </div>

    {/* Description */}
    <p className="text-white/70">{detail.description}</p>

    {/* Additional Details */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white/80">
  <div className="flex flex-col">
    <p className="text-sm font-semibold">Market Cap</p>
    <p>${millify(detail.marketCap)}</p>
  </div>
  <div className="flex flex-col">
    <p className="text-sm font-semibold">Volume (24h)</p>
    <p>${millify(detail["24hVolume"])}</p>
  </div>
  <div className="flex flex-col">
    <p className="text-sm font-semibold">All Time High(daily avg.)</p>
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

</div>

  
  {/* Chart Section */}
  <div className="w-full bg-[#1e1d24] p-4 rounded-lg shadow-md h-full">
    <div className="flex w-full justify-between items-center mb-4">
      <div className="flex items-center text-[14px] sm:text-base gap-4">
        <p>Change: <span className={`${coinColorClass} font-semibold tracking-wider`}>{detail.change}%</span></p>
        <p>{detail.name} Price: ${millify(detail.price)}</p>
      </div>
      <ChangeTimePeriod value={timePeriod} functionCTP={(e) => setTimePeriod(e.currentTarget.value)} />
    </div>
    <Line data={dataCharts} />
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
        <button type="button" name={`Add watchlish ${detail.name}`} className="px-4 py-2 bg-[#2c2b33] flex items-center gap-2 text-white rounded-md hover:bg-[#33323b]">
          <BsFillBookmarkPlusFill size={18} /> <span className="hidden sm:inline-block">Add to Watchlist</span>
        </button>
        <button type="button" onClick={() => setLikeCoin((prev) => !prev)} name={`Love ${detail.name}`} className="py-2 max-w-[44px]  w-full px-3 bg-[#2c2b33] flex items-center gap-2 text-white rounded-md hover:bg-[#33323b]">
          {likeCoin ? <GoHeartFill size={24} color="#f87171" /> : <GoHeart size={24} />}
        </button>
      </div>
    </div>
  </div>
  
</div>

  
  );
};

export default CryptoDetail;
