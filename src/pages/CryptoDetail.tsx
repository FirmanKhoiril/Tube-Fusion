import { useParams } from "react-router-dom";
import useGetCryptoDetail from "../hooks/useGetCryptoDetail";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import useGetCryptoHistory from "../hooks/useGetCryptoHistory";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoDetail = () => {
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
    uuid,
  });

  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price * 15000000);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }

  const dataCharts = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: true,
        
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#10b981",
      },
    ],
  };
  console.log(data)
  if (isError || errorCoinHistory) return <Error />;

  if (isFetching || isLoading || fetchingCoinHistory || loadingCoinHistory) return <Loading width={100} height={100} isLoading />;

  return (
    <div className="pt-20 container w-full mx-auto">
      CryptoDetail {uuid}
      <Line data={dataCharts} />
    </div>
  );
};

export default CryptoDetail;
