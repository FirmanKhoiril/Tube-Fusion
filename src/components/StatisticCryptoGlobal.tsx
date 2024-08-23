import millify from "millify";
import { IDataStats } from "../types/Interface";
import { FaCoins, FaExchangeAlt, FaChartLine, FaMapMarkedAlt, FaDollarSign, FaInfoCircle } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const StatisticCryptoGlobal = ({ total24hVolume, totalCoins, totalExchanges, isLoading, totalMarketCap, totalMarkets }: IDataStats) => {

  const stats = [
    {
      icon: FaCoins,
      label: 'Total Coins',
      value: totalCoins,
      color: 'text-yellow-400',
      tooltip: 'Total number of cryptocurrencies available in the market.',
    },
    {
      icon: FaMapMarkedAlt,
      label: 'Total Markets',
      value: totalMarkets,
      color: 'text-blue-400',
      tooltip: 'Total number of markets where cryptocurrencies are traded.',
    },
    {
      icon: FaExchangeAlt,
      label: 'Total Exchanges',
      value: totalExchanges,
      color: 'text-green-400',
      tooltip: 'Total number of exchanges available for trading cryptocurrencies.',
    },
    {
      icon: FaDollarSign,
      label: 'Total MarketCap',
      value: totalMarketCap,
      color: 'text-purple-400',
      tooltip: 'Total market capitalization of all cryptocurrencies combined.',
    },
    {
      icon: FaChartLine,
      label: 'Total 24H Volume',
      value: total24hVolume,
      color: 'text-red-400',
      tooltip: 'Total trading volume of cryptocurrencies in the last 24 hours.',
    },
  ];

  return (
    <div className="grid grid-cols-2 font-semibold text-white gap-6 text-base sm:text-xl py-4 rounded-lg sm:grid-cols-3">
      {stats.map(({ icon: Icon, label, value, color, tooltip }, index) => (
        <div
          key={index}
          className="flex items-center max-h-[80px] gap-3 p-4 bg-dark-0 drop-shadow-md rounded-lg relative"
        >
          <Icon className={`${color} text-xl sm:text-2xl`} />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h1 className="text-xs text-gray-400">{label}</h1>
              <FaInfoCircle
                className="text-gray-400 text-[0.8rem] cursor-pointer"
                data-tooltip-id={`tooltip-${index}`}
              />
              <Tooltip id={`tooltip-${index}`} style={{fontSize: 12}} className="custom-tooltip" content={tooltip} place="top" />
            </div>
            {isLoading ? (
              <span className="h-[23.5px] sm:h-[27px] bg-gray-500/90 rounded-md w-8"></span>
            ) : (
              <span>{millify(value)}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticCryptoGlobal;
