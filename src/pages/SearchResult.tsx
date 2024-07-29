
import { useParams } from 'react-router-dom'

const SearchResult = () => {
    const {search} = useParams()
  return (
    <div>{search}</div>
  )
}

export default SearchResult