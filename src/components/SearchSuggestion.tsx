import { cryptoList } from '../context/cryptoList';
import { CiBitcoin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useHandleEventSearchMobile from '../hooks/useHandleEventSearchMobile';
import useDebounce from '../hooks/useDebounce'; // Import the custom hook
import { useEffect, useState } from 'react';

type TSearchParam = {
  search: string | null | any;
};

type TDataSearch = {
  name: string,
  symbol: string
};

const SearchSuggestion = ({ search }: TSearchParam) => {
  const [cryptos, setCryptos] = useState<any>([]);
  const debouncedSearch = useDebounce(search, 300); // Set debounce delay to 300ms
  const {
    setExpandSearchBarMobile,
  } = useHandleEventSearchMobile();

  const transformedCryptoList = Object.entries(cryptoList[0]).map(([symbol, name]) => ({ symbol, name }));

  useEffect(() => {
    const filteredCoins = transformedCryptoList.filter(coin =>
          coin.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )

    setCryptos(filteredCoins);
  }, [debouncedSearch]);

  return (
    <div
      className="fixed top-[70px] sm:hidden min-h-[20px] max-h-full inline-block px-4 overflow-y-auto left-0 w-full z-[60] bg-dark-0"
    >
      {cryptos.map((coin: TDataSearch) => (
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
