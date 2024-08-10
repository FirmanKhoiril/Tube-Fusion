import { BsFire, BsFillShieldLockFill , BsFillPiggyBankFill , BsFillHouseDoorFill } from "react-icons/bs";
import { FaCoins, FaExchangeAlt, FaGavel, FaLock, FaLaugh } from "react-icons/fa";

export const categories = [
  { name: "all", icon: <BsFire size={15} /> },
  { name: "defi", icon: <BsFillShieldLockFill  size={15} /> },
  { name: "stablecoin", icon: <BsFillPiggyBankFill  size={15} /> },
  { name: "nft", icon: <BsFillHouseDoorFill size={15} /> },
  { name: "dex", icon: <FaExchangeAlt size={15} /> },
  { name: "exchange", icon: <FaExchangeAlt size={15} /> },
  { name: "staking", icon: <FaCoins size={15} /> },
  { name: "dao", icon: <FaGavel size={15} /> },
  { name: "meme", icon: <FaLaugh size={15} /> },
  { name: "privacy", icon: <FaLock size={15} /> }
];
