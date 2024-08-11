import millify from "millify";
import { IDataStats } from "../types/Interface";
import { FaCoins, FaExchangeAlt, FaChartLine, FaMapMarkedAlt, FaDollarSign } from "react-icons/fa"; // Example icons

const StatisticCryptoGlobal = ({ total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets }: IDataStats) => {
  return (
    <div className="grid grid-cols-2 gap-6 py-4 rounded-lg sm:grid-cols-3">
      <div className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md hover:drop-shadow-lg transition duration-200 ease-in-out rounded-lg">
        <FaCoins className="text-yellow-400 text-2xl" />
        <div>
          <h1 className="text-xs text-gray-400">Total Coins</h1>
          <p className="text-xl font-semibold text-white">{millify(totalCoins)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md hover:drop-shadow-lg transition duration-200 ease-in-out rounded-lg">
        <FaMapMarkedAlt className="text-blue-400 text-2xl" />
        <div>
          <h1 className="text-xs text-gray-400">Total Markets</h1>
          <p className="text-xl font-semibold text-white">{millify(totalMarkets)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md hover:drop-shadow-lg transition duration-200 ease-in-out rounded-lg">
        <FaExchangeAlt className="text-green-400 text-2xl" />
        <div>
          <h1 className="text-xs text-gray-400">Total Exchanges</h1>
          <p className="text-xl font-semibold text-white">{millify(totalExchanges)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md hover:drop-shadow-lg transition duration-200 ease-in-out rounded-lg">
        <FaDollarSign className="text-purple-400 text-2xl" />
        <div>
          <h1 className="text-xs text-gray-400">Total MarketCap</h1>
          <p className="text-xl font-semibold text-white">{millify(totalMarketCap)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-dark-0 drop-shadow-md hover:drop-shadow-lg transition duration-200 ease-in-out rounded-lg">
        <FaChartLine className="text-red-400 text-2xl" />
        <div>
          <h1 className="text-xs text-gray-400">Total 24H Volume</h1>
          <p className="text-xl font-semibold text-white">{millify(total24hVolume)}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCryptoGlobal;
