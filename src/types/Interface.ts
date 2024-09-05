export interface ICryptocurrency {
    ["24hVolume"]: number;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  contractAddresses: string[];
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
  }
  export type TFilterFunction = {
    tag: string | "",
    setFilterTag: (params: URLSearchParams) => void,
    filterTag: URLSearchParams
    timePeriodValue: string | "" | null
  }

  export interface IDataStats {
    total: number
    totalCoins: number
    totalMarkets: number
    totalExchanges: number
    totalMarketCap: number
    total24hVolume: number
    isLoading: boolean
}

type TImage = {
  image: any
}

export type TFilterCardData = {
  name: string
  images: TImage[]
  icon: JSX.Element;
  description: string
}

export interface ICardCrypto {
  coin: {
    btcPrice: string;
    change: string;
    coinrankingUrl: string;
    color: string;
    contractAddresses: string[];
    iconUrl: string;
    listedAt: number;
    lowVolume: boolean;
    marketCap: number;
    name: string;
    price: number;
    rank: number;
    sparkline: string[];
    symbol: string;
    tier: number;
    uuid: string;
    ["24hVolume"]: number;
  }
}

export type TChangeTimePeriodParams = {
  functionCTP: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | null;
};

export type TLinks = {
  name: string,
  type: string,
  url: string
}

type CoinHistoryData = {
  change: string;
  history: Array<PriceHistory>;
}

type PriceHistory = {
  price: string;
  timestamp: number;
}

type CoinHistoryResponse = {
  status: string;
  data: CoinHistoryData;
}


export type TLineCharts = {
  name: string,
  coinHistory: CoinHistoryResponse
}