import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="font-[600] text-lg cursor-pointer text-primary-0 flex items-center gap-[-10px] tracking-wide">FUSIONER</h1>
    </Link>
  )
}

export default Logo