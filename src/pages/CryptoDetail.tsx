import { useParams } from "react-router-dom"

const CryptoDetail = () => {
    const {uuid} = useParams()
  return (
    <div className="pt-20 container w-full mx-auto">CryptoDetail {uuid}</div>
  )
}

export default CryptoDetail