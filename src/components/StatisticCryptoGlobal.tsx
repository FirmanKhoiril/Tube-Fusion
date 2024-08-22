import millify from "millify";
import { IDataStats } from "../types/Interface";
import { FaCoins, FaExchangeAlt, FaChartLine, FaMapMarkedAlt, FaDollarSign } from "react-icons/fa";

const StatisticCryptoGlobal = ({ total24hVolume, totalCoins, totalExchanges, isLoading, totalMarketCap, totalMarkets }: IDataStats) => {

  const stats = [
    { icon: FaCoins, label: 'Total Coins', value: totalCoins, color: 'text-yellow-400' },
    { icon: FaMapMarkedAlt, label: 'Total Markets', value: totalMarkets, color: 'text-blue-400' },
    { icon: FaExchangeAlt, label: 'Total Exchanges', value: totalExchanges, color: 'text-green-400' },
    { icon: FaDollarSign, label: 'Total MarketCap', value: totalMarketCap, color: 'text-purple-400' },
    { icon: FaChartLine, label: 'Total 24H Volume', value: total24hVolume, color: 'text-red-400' },
  ];

  return (
    <div className="grid grid-cols-2 font-semibold text-white gap-6 text-base sm:text-xl py-4 rounded-lg sm:grid-cols-3">
      {stats.map(({ icon: Icon, label, value, color }, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md rounded-lg"
        >
          <Icon className={`${color} text-lg sm:text-2xl`} />
          <div className="flex flex-col gap-1">
            <h1 className="text-xs text-gray-400">{label}</h1>
            {isLoading ? <span className="h-6 sm:h-[27px] bg-gray-500/90 rounded-md w-10 "></span> : <span>{millify(value)}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticCryptoGlobal;