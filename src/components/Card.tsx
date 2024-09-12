import { ICardCrypto } from "../types/Interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import millify from "millify";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ coin }: ICardCrypto) => {
  const coinChangePositive = parseFloat(coin.change) >= 0;
  const coinColorClass = coinChangePositive ? 'text-green-500' : 'text-red-600';

  return (
    <Link 
      to={`/crypto/${coin.uuid}`} 
      className="w-full py-5 px-4 sm:px-6 rounded-lg transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg transform hover:scale-[1.02]"
      style={{ backgroundColor: '#1e1e1f', color: '#B2DBDB' }}
    >
      <div className="flex items-center gap-4">
        <p className="sm:inline-block hidden">
          #{coin.rank}
        </p>
      <div className="flex gap-4">
        <picture className="pt-1.5">
            <source srcSet={`${coin.iconUrl}?format=avif`} type="image/avif" />
            <source srcSet={`${coin.iconUrl}?format=webp`} type="image/webp" />
            <LazyLoadImage 
              alt={coin.name} 
              src={coin.iconUrl} 
              width={38} 
              height={38} 
              effect="blur"
              className="rounded-sm"
              
            />
          </picture>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-lg truncate max-w-[180px] sm:max-w-[500px]">
              {coin.name}
            </h1>
            <span className="text-sm opacity-90 truncate max-w-[100px]">
              {coin.symbol}
            </span>
          </div>
      </div>
      </div>
      <div className="flex items-center gap-3 text-right">
        <div className="flex flex-col items-end">
          <span className={`${coinColorClass} font-medium text-base`}>
            {coin.change}%
          </span>
          <span className="text-xs">Vol: {millify(coin["24hVolume"])}$</span>
        </div>
        {coinChangePositive ? (
          <FaArrowTrendUp className="text-primary" size={20} style={{ color: '#10b981' }} />
        ) : (
          <FaArrowTrendDown className="text-red-600" size={20} />
        )}
      </div>
    </Link>
  );
}

export default Card;
