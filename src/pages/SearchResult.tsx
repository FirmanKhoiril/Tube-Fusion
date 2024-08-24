
import { useParams } from 'react-router-dom'
import useGetSearchResult from '../hooks/useGetSearchResult'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { ICryptocurrency } from '../types/Interface'
import Card from '../components/Card'
import CustomScrollToTop from '../components/ScroolToTop'

const SearchResult = () => {
    const {result} = useParams()
    const {data, isError, isFetching, isLoading, } = useGetSearchResult({
      search: result
    })
    
    if(isError) return <Error />
  
    if(isFetching && isLoading) return <Loading width={100} height={100} isLoading />

  return (
    <div className='pt-20 container mx-auto flex w-full px-2 h-full flex-col'>
       <h1 className="text-lg sm:text-xl font-medium">Searching: {result}</h1>
       <div className="flex flex-col py-4 gap-4">
        {data?.data?.coins.map((coin: ICryptocurrency) => (
          <Card key={coin.rank + coin.uuid} coin={coin} />
        ))}         
      </div>
      <CustomScrollToTop />
    </div>
  )
}

export default SearchResult