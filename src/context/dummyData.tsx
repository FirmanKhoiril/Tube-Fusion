import { BsFire, BsFillShieldLockFill , BsFillPiggyBankFill , BsFillHouseDoorFill } from "react-icons/bs";
import { FaCoins, FaExchangeAlt, FaGavel, FaLock, FaLaugh } from "react-icons/fa";
import {doge, bitcoin_btc, bnb, eth, usdc, usdt, solana, ada, xrp} from '../assets/image/all'

export const categories = [
  { 
    name: "all", 
    icon: <BsFire size={15} />,
    images: [
    {
        image: bitcoin_btc
    },
    {
      image: eth
    },
    {
      image: usdt
    },
    {
      image: solana
    },
    {
      image: doge
    },
    {
      image: bnb
    },
    {
      image: usdc
    },
    {
      image: ada
    },
    {
      image: xrp
    },
  ],
    backgroundColor: "linear-gradient(135deg, #FF7E5F 0%, #FEB47B 100%)",
    color: 'black',
    description: "A category encompassing most Popular coins."
  },
  // { 
  //   name: "defi", 
  //   icon: <BsFillShieldLockFill size={15} />,
  //   images: Array(10).fill("mockImageURL_defi"),
  //   description: "Decentralized Finance (DeFi) platforms and services."
  // },
  // { 
  //   name: "stablecoin", 
  //   icon: <BsFillPiggyBankFill size={15} />,
  //   images: Array(10).fill("mockImageURL_stablecoin"),
  //   description: "Cryptocurrencies pegged to stable assets like fiat currencies."
  // },
  // { 
  //   name: "nft", 
  //   icon: <BsFillHouseDoorFill size={15} />,
  //   images: Array(10).fill("mockImageURL_nft"),
  //   description: "Non-Fungible Tokens (NFTs) representing unique digital assets."
  // },
  // { 
  //   name: "dex", 
  //   icon: <FaExchangeAlt size={15} />,
  //   images: Array(10).fill("mockImageURL_dex"),
  //   description: "Decentralized exchanges for trading cryptocurrencies."
  // },
  // { 
  //   name: "exchange", 
  //   icon: <FaExchangeAlt size={15} />,
  //   images: Array(10).fill("mockImageURL_exchange"),
  //   description: "Centralized cryptocurrency exchanges."
  // },
  // { 
  //   name: "staking", 
  //   icon: <FaCoins size={15} />,
  //   images: Array(10).fill("mockImageURL_staking"),
  //   description: "Platforms and services for staking cryptocurrencies."
  // },
  // { 
  //   name: "dao", 
  //   icon: <FaGavel size={15} />,
  //   images: Array(10).fill("mockImageURL_dao"),
  //   description: "Decentralized Autonomous Organizations (DAOs)."
  // },
  // { 
  //   name: "meme", 
  //   icon: <FaLaugh size={15} />,
  //   images: Array(10).fill("mockImageURL_meme"),
  //   description: "Cryptocurrencies and projects based on memes."
  // },
  // { 
  //   name: "privacy", 
  //   icon: <FaLock size={15} />,
  //   images: Array(10).fill("mockImageURL_privacy"),
  //   description: "Privacy-focused cryptocurrencies and services."
  // }
];

export const timePeroidOptions = [
  '3h', '24h', '7d','30d', '3m', '1y', "3y", "5y"
];
   