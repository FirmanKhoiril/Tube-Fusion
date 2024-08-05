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
  marketCap: string;
  name: string;
  price: number;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
  }
  
export interface ICardCrypto {
    coin: {
        ["24hVolume"]: number;
        btcPrice: string;
        change: string;
        coinrankingUrl: string;
        color: string;
        contractAddresses: string[];
        iconUrl: string;
        listedAt: number;
        lowVolume: boolean;
        marketCap: string;
        name: string;
        price: number;
        rank: number;
        sparkline: string[];
        symbol: string;
        tier: number;
        uuid: string;
    }
}