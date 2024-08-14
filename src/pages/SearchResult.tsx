
import { useParams } from 'react-router-dom'
import useGetSearchResult from '../hooks/useGetSearchResult'

const SearchResult = () => {
    const {result} = useParams()
    const {data} = useGetSearchResult({
      search: result
    })
    console.log(data)
  return (
    <div>{result}</div>
  )
}

export default SearchResult