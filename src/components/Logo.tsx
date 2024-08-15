import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logos from '../assets/icon/logo.jpg'

const Logo = () => {
  return (
    <Link to={"/"}>
      <LazyLoadImage src={Logos} alt="Fusioner Logo" className="rounded-full" width={40} height={40} />
    </Link>
  )
}

export default Logo