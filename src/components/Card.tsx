import { ICardCrypto } from "../types/Interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import millify from "millify";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ coin }: ICardCrypto) => {
  const coinChangePositive = parseFloat(coin.change) >= 0;
  const coinColorClass = coinChangePositive ? 'text-primary' : 'text-red-600';

  return (
    <Link 
      to={`/crypto/${coin.uuid}`} 
      className="w-full bg-dark hover:bg-darkPrimary py-5 px-4 sm:px-6 rounded-lg transition duration-200 flex items-center justify-between shadow-md hover:shadow-lg transform hover:scale-105"
      style={{ backgroundColor: '#2C2B33', color: '#B2DBDB' }}
    >
      <div className="flex items-center gap-4">
        <p className="sm:inline-block hidden">
          #{coin.rank}
        </p>
        <picture>
          <source srcSet={`${coin.iconUrl}?format=avif`} type="image/avif" />
          <source srcSet={`${coin.iconUrl}?format=webp`} type="image/webp" />
          <LazyLoadImage 
            alt={coin.name} 
            src={coin.iconUrl} 
            width={40} 
            height={40} 
            effect="blur"
          />
        </picture>
        <div className="flex flex-col">
          <h1 className="font-medium text-lg">{coin.name}</h1>
          <span className="text-sm opacity-90">{coin.symbol}</span>
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
