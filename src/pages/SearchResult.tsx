
import { useParams } from 'react-router-dom'
import useGetSearchResult from '../hooks/useGetSearchResult'

const SearchResult = () => {
    const {search} = useParams()
    const {data} = useGetSearchResult({
      search: search
    })
    console.log(data)
  return (
    <div>{search}</div>
  )
}

export default SearchResult