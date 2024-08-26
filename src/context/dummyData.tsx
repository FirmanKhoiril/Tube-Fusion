import { BsFire,BsFillShieldLockFill , BsFillPiggyBankFill , BsFillHouseDoorFill } from "react-icons/bs";
import { FaCoins, FaExchangeAlt, FaGavel, FaLock, FaLaugh, FaLightbulb, FaChartLine, FaUsers, FaGoogle, FaApple, FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaMicrosoft, FaLinkedin } from "react-icons/fa";
import {doge, bitcoin_btc, bnb, usdc, usdt, solana, xrp} from '../assets/image/all'
import {ant, compoundIcon, ConstitutionDAO, CurveDAO, MantraDao, uniswapV2, Illuvium, SyntetixNetwork, AAve} from '../assets/image/Dao'
import {ada, eth, ListaDAO, Polkadot, Near, Mina, Conflux, Polygon} from '../assets/image/staking'
import {Dai, Tether, Ethena, TrueUSD, FirsDigitalUSD, USDC, USDD, Frax, EdelCoin} from '../assets/image/stablecoin'
import {OxO, BELDEX, Verge, Dash, Zcash, Decred, Horizen, Zephyr, DigiByte} from '../assets/image/private'
import {ASI, axieInfinity, ThetaNetwork, ENS, InternetComputer, Gala, Immutable, render, Flow} from '../assets/image/nft'
import {Baby_Doge, bonk, shiba, brett, pepe, dogwifhat, Floki, Popcat} from '../assets/image/meme'
import {Avalanche, TheGraph, Chainlink, Jupiter, ICP, Injective, Stacks, Aave, Theta} from '../assets/image/defi'
import { coinex, okx, cronos, mandalaExchange, ftxExchange, Leo, mxtoken, GateToken} from '../assets/image/exchange'
import { oneInch, DyDx, uniswap, jupiter, PancakeSwap, SNX, ThorChain, Raydium } from '../assets/image/dex'
import { SiCoinmarketcap, SiBinance, SiCoinbase   } from "react-icons/si";

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
    description: "A category encompassing most Popular coins."
  },
  { 
    name: "defi", 
    icon: <BsFillShieldLockFill size={15} />,
    images: [
      {
        image: Avalanche
      },
      {
        image: TheGraph
      },
      {
        image: Chainlink
      },
      {
        image: Jupiter
      },
      {
        image: ICP
      },
      {
        image: Injective
      },
      {
        image: Stacks
      },
      {
        image: Aave
      },
      {
        image: Theta
      },
    ],
    description: "Decentralized Finance (DeFi) platforms and services."
  },
  { 
    name: "stablecoin", 
    icon: <BsFillPiggyBankFill size={15} />,
    images: [
      {
          image: Dai
      },
      {
        image: Tether
      },
      {
        image: EdelCoin
      },
      {
        image: Ethena
      },
      {
        image: TrueUSD
      },
      {
        image: FirsDigitalUSD
      },
      {
        image: USDC
      },
      {
        image: USDD
      },
      {
        image: Frax
      },
    ],
    description: "Cryptocurrencies pegged to stable assets like fiat currencies."
  },
  { 
    name: "nft", 
    icon: <BsFillHouseDoorFill size={15} />,
    images: [
      {
          image: ASI
      },
      {
        image:axieInfinity
      },
      {
        image: ThetaNetwork
      },
      {
        image: ENS
      },
      {
        image: InternetComputer
      },
      {
        image: Gala
      },
      {
        image: Immutable
      },
      {
        image: render
      },
      {
        image: Flow
      },
    ],
    description: "Non-Fungible Tokens (NFTs) representing unique digital assets."
  },
  { 
    name: "dex", 
    icon: <FaExchangeAlt size={15} />,
    images: [
      {
          image: SyntetixNetwork
      },
      {
        image: oneInch
      },
      {
        image: DyDx
      },
      {
        image: uniswap
      },
      {
        image: jupiter
      },
      {
        image: PancakeSwap
      },
      {
        image: SNX
      },
      {
        image: ThorChain
      },
      {
        image: Raydium
      },
    ],
    description: "Decentralized exchanges for trading cryptocurrencies."
  },
  { 
    name: "exchange", 
    icon: <FaExchangeAlt size={15} />,
    images: [
      {
          image: bnb
      },
      {
        image: coinex
      },
      {
        image: okx
      },
      {
        image: cronos
      },
      {
        image: mandalaExchange
      },
      {
        image: ftxExchange
      },
      {
        image: Leo
      },
      {
        image: mxtoken
      },
      {
        image: GateToken
      },
    ],
    description: "Centralized cryptocurrency exchanges."
  },
  { 
    name: "staking", 
    icon: <FaCoins size={15} />,
    images: [
      {
          image: ada
      },
      {
        image: eth
      },
      {
        image: ListaDAO
      },
      {
        image: Polkadot
      },
      {
        image: Polygon
      },
      {
        image: Near
      },
      {
        image: Mina
      },
      {
        image: Conflux
      },
      {
        image: solana
      },
    ],
    description: "Platforms and services for staking cryptocurrencies."
  },
  { 
    name: "dao", 
    icon: <FaGavel size={15} />,
    images: [
      {
          image: ant,
      },
      {
        image: ConstitutionDAO
      },
      {
        image: CurveDAO
      },
      {
        image: AAve
      },
      {
        image: MantraDao
      },
      {
        image: uniswapV2
      },
      {
        image: compoundIcon
      },
      {
        image: Illuvium
      },
      {
        image: SyntetixNetwork
      }],
    description: "Decentralized Autonomous Organizations (DAOs)."
  },
  { 
    name: "meme", 
    icon: <FaLaugh size={15} />,
    images: [
      {
          image: doge
      },
      {
        image:pepe
      },
      {
        image: brett
      },
      {
        image: dogwifhat
      },
      {
        image: Floki
      },
      {
        image: Popcat
      },
      {
        image: bonk
      },
      {
        image: shiba
      },
      {
        image: Baby_Doge
      },
    ],
    description: "Cryptocurrencies and projects based on memes."
  },
  { 
    name: "privacy", 
    icon: <FaLock size={15} />,
    images: [
      {
          image: OxO
      },
      {
        image:BELDEX
      },
      {
        image: Verge
      },
      {
        image: Dash
      },
      {
        image: Zcash
      },
      {
        image: Zephyr
      },
      {
        image: Decred
      },
      {
        image: Horizen
      },
      {
        image: DigiByte
      },
    ],
    description: "Privacy-focused cryptocurrencies and services."
  }
];

export const timePeroidOptions = [
  '3h', '24h', '7d','30d', '3m', '1y', "3y", "5y"
];
   

export const coreValues = [
  {
    icon: FaLock,
    title: "Security",
    description: "We prioritize the safety of your investments with cutting-edge security measures.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description: "We embrace new technologies and ideas to keep you ahead in the crypto world.",
  },
  {
    icon: FaChartLine,
    title: "Transparency",
    description: "Our platform is built on trust, with clear and honest communication.",
  },
  {
    icon: FaUsers,
    title: "Community",
    description: "We believe in the power of community and foster a space where everyone can thrive.",
  },
];



export const supportedCompanies = [
  { name: "Google", icon: FaGoogle },
  { name: "Apple", icon: FaApple },
  { name: "Facebook", icon: FaFacebookF },
  { name: "Instagram", icon: FaInstagram },
  { name: "Twitter", icon: FaTwitter },
  { name: "Amazon", icon: FaAmazon },
  { name: "Microsoft", icon: FaMicrosoft },
  { name: "LinkedIn", icon: FaLinkedin },
  { name: "Binance", icon: SiBinance  },
  { name: "Coinbase", icon: SiCoinbase  },
  { name: "CoinMarketCap", icon: SiCoinmarketcap },
];
