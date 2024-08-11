import { useSearchParams } from 'react-router-dom'

export default function useGetFilterTag() {
    const [filterTag, setFilterTag] = useSearchParams({
        tags: "all",
        timePeriod: '24h'
    })
    
    const tag = filterTag.get("tags") || ""
    const timePeriodValue = filterTag.get("timePeriod")

    return {
        tag, timePeriodValue, filterTag, setFilterTag
    }
}
