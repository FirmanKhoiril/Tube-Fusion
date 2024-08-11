import { ICardCrypto } from "../types/Interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import millify from "millify";
import { Link } from "react-router-dom";

const Card = ({ coin }: ICardCrypto) => {
  const coinChangePositive = parseFloat(coin.change) >= 0;
  const coinColorClass = coinChangePositive ? 'text-green-400' : 'text-red-600';

  return (
    <Link to={`/crypto/${coin.uuid}`} className="w-full bg-white/5 hover:bg-white/20 py-4 px-5 rounded-xl transition duration-200 flex items-center cursor-pointer justify-between shadow-md hover:shadow-lg transform hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <LazyLoadImage alt={coin.name} src={coin.iconUrl} width={32} height={32} className="rounded-full" />
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-base tracking-wide">{coin.name} <span className="text-sm text-white/60">({coin.symbol})</span></h1>
          <p className="text-white/50 text-xs">Volume: {millify(coin["24hVolume"])}$</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col justify-between text-right">
        <h1 className={`${coinColorClass} font-semibold text-sm`}>{coin.change}%</h1>
        {coinChangePositive ? (
          <FaArrowTrendUp color="#4ade80" size={18} />
        ) : (
          <FaArrowTrendDown color="#dc2626" size={18} />
        )}
      </div>
    </Link>
  );
}

export default Card;
