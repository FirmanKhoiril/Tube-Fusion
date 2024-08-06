import millify from "millify"
import { IDataStats } from "../types/Interface"

const StatisticCryptoGlobal = ({total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets }: IDataStats) => {

  return (
    <div className="grid grid-cols-2 items-center gap-4 pb-2 pt-4 grid-rows-3 sm:grid-rows-2">
        <div className="flex flex-col gap-2">
            <h1 className="text-sm text-white/50">Total Coins</h1>
            <p className="lg sm:text-xl font-semibold tracking-wide">{millify(totalCoins)} Coin</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-sm text-white/50">Total Markets</h1>
            <p className="lg sm:text-xl font-semibold tracking-wide">{millify(totalMarkets)} Market</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-sm text-white/50">Total Exchanges</h1>
            <p className="lg sm:text-xl font-semibold tracking-wide">{millify(totalExchanges)} Exchange</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-sm text-white/50">Total MarketCap</h1>
            <p className="lg sm:text-xl font-semibold tracking-wide">{millify(totalMarketCap)} MarketCap</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-sm text-white/50">Total 24H Volume</h1>
            <p className="lg sm:text-xl font-semibold tracking-wide">{millify(total24hVolume)} Volume</p>
        </div>
    </div>
  )
}

export default StatisticCryptoGlobal