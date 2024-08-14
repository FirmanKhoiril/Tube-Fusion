import { cryptoList } from '../context/cryptoList';
import { CiBitcoin } from "react-icons/ci";
import { Link  } from 'react-router-dom';
import useHandleEventSearchMobile from '../hooks/useHandleEventSearchMobile';

type TSearchParam = {
  search: string | null | any;
};

const transformedCryptoList = Object.entries(cryptoList[0]).map(([symbol, name]) => ({ symbol, name }));

const SearchSuggestion = ({ search }: TSearchParam) => {
  const {
    setExpandSearchBarMobile,
  } = useHandleEventSearchMobile()
  const filteredCoins = search
  ? transformedCryptoList.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
  : transformedCryptoList;

  return (
    <div
      className="fixed top-[74px] sm:hidden min-h-[20px] max-h-full inline-block px-4 overflow-y-auto left-0 w-full z-[60] bg-dark-0"
    >
        {filteredCoins.map((coin) => (
          <Link
            to={`/search/${coin.name}`}
            onClick={() => setExpandSearchBarMobile(false)}
            key={coin.symbol}
            className={`border-t hover:text-primary-0 transition duration-200 w-full cursor-pointer capitalize flex items-center gap-2.5 border-white/5 py-2.5`}
          >
            <CiBitcoin size={24} color='white' /> {coin.name}
          </Link>
        ))}
    </div>
  );
};

export default SearchSuggestion;
