import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2";
import useManagedCryptoCharts from "../hooks/useManagedCryptoCharts";
import { useGlobalState } from "../context/useStore";
import { TLineCharts } from "../types/Interface";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineCharts = ({ coinHistory, name}: TLineCharts) => {
  const {timePeriod} = useGlobalState()

  const {coinPrice, coinTimestamp} = useManagedCryptoCharts({coinHistory, timePeriod})

  const dataCharts: ChartData<'line'> = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${name} price in USD`,
        data: coinPrice,
        fill: true,
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10b981",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: (context: ScriptableContext<'line'>) => {
          const index = context.dataIndex;
          return index === coinPrice.length - 1 ? 6 : 0;
        },
        pointBackgroundColor: (context: ScriptableContext<'line'>) => {
          const index = context.dataIndex;
          return index === coinPrice.length - 1 ? "#10b981" : "transparent";
        },
        pointBorderColor: (context: ScriptableContext<'line'>) => {
          const index = context.dataIndex;
          return index === coinPrice.length - 1 ? "#fff" : "transparent";
        },
      },
    ],
  };

  return (
    <Line 
    data={dataCharts}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
            grid: {
              display: true,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            align: "center",
          },
        },
      }} 
    />
  )
}

export default LineCharts