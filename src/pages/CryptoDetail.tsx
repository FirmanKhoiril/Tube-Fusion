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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoDetail = () => {
  const [timePeriod, setTimePeriod] = useState("3h")
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

  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }

  coinPrice.reverse();
  coinTimestamp.reverse();
  
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
    <div className="container pt-24 mx-auto flex flex-col gap-2 w-full">
    <div className="flex items-start gap-4 sm:items-center">
      <LazyLoadImage width={40} height={40} src={detail.iconUrl} />
      <div>
        <h1 className="text-2xl font-bold tracking-wide">
          {detail.name}&nbsp;
          <span className="text-lg">({detail.symbol})</span>
        </h1>
        <p className="text-white/70">{detail.description}</p>
      </div>
    </div>
    <div className="w-full h-full pt-4">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-4">
          <p>Change: <span className={`${coinColorClass} font-semibold tracking-wider`}>{detail.change}%</span></p>
          <p>Current Bitcoin Price: ${millify(detail.price)}</p>
        </div>  
        <ChangeTimePeriod value={timePeriod} functionCTP={(e) => setTimePeriod(e.currentTarget.value)} />
      </div>
      <Line data={dataCharts} />
    </div>
  </div>
  
  );
};

export default CryptoDetail;
