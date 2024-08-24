
import { useParams } from 'react-router-dom'
import useGetSearchResult from '../hooks/useGetSearchResult'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { ICryptocurrency } from '../types/Interface'
import Card from '../components/Card'
import CustomScrollToTop from '../components/ScroolToTop'
import WithMetaTag from '../utils/withMetaTag'

const SearchResult = () => {
    const {result} = useParams()
    const {data, isError, isFetching, isLoading, } = useGetSearchResult({
      search: result
    })

    const title = `Fusioner: ${result} | Discover Top Cryptocurrencies`;
    const description = `Explore the top cryptocurrencies related to "${result}" on Fusioner. Get the latest data, rankings, and insights to help you make informed trading decisions.`;
    const keywords = `Fusioner, search, cryptocurrencies, ${result}, crypto trading, top coins, crypto insights`;
  
    
    if(isError) return <Error />
    if(isFetching && isLoading) return <Loading width={100} height={100} isLoading />

  return (
    <WithMetaTag title={title} desc={description} keywords={keywords} link={`https://fusioner.vercel.app/search/${result}`}>
      <div className='pt-20 container mx-auto flex w-full px-2 h-full flex-col'>
       <h1 className="text-lg sm:text-xl font-medium">Searching: {result}</h1>
       <div className="flex flex-col py-4 gap-4">
        {data?.data?.coins.map((coin: ICryptocurrency) => (
          <Card key={coin.rank + coin.uuid} coin={coin} />
        ))}         
      </div>
      <CustomScrollToTop />
      </div>
    </WithMetaTag>
  )
}

export default SearchResult