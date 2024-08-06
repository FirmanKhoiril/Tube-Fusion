import { ICardCrypto } from "../types/Interface"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import millify from "millify";

const Card = ({coin}: ICardCrypto) => {

  const coinColorNumber = parseFloat(coin.change) < 0 ? 'text-red-600' : 'text-green-400';
  return (
    <div className={`w-full  bg-white/5 hover:bg-white/10  py-3 px-4 rounded-xl  transition duration-200 flex items-center cursor-pointer justify-between drop-shadow-md`}>
      <div className="flex items-center gap-3">
        <p>{coin.rank}.</p>
        <LazyLoadImage alt={coin.name} src={coin.iconUrl} width={28} height={28} />
        <div className="flex flex-col gap-1">
          <h1 className="font-medium sm:tracking-wide sm:text-base text-sm">{coin.name}({coin.symbol})</h1>
          <p className="text-white/40 text-[12px]">Volume: &nbsp;{millify(coin["24hVolume"])}$</p>
        </div>
      </div>
      <div className="flex items-center w-full max-w-[80px] justify-between">
        {parseFloat(coin.change) < 0 ? <FaArrowTrendDown color="#dc2626" size={18} /> : <FaArrowTrendUp color="#4ade80" size={18} />}
        <h1 className={`${coinColorNumber} font-semibold text-sm`}>{coin.change}%</h1>
      </div>
    </div>
  )
}

export default Card