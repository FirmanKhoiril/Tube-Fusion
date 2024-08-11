import useGetFilterTag from "../hooks/useGetFilterTag"
import { LazyLoadImage } from 'react-lazy-load-image-component';


type TImage = {
  image: any
}
type TFilterCardData = {
  name: string
  images: TImage[]
  icon: JSX.Element;
  description: string
}
const FilterCard = ({name, icon, images, description}: TFilterCardData) => {
  const {setFilterTag, filterTag, tag } = useGetFilterTag()
  return (
    <div onClick={() => {
      const newParams = new URLSearchParams(filterTag);
      newParams.set("tags", name);
      setFilterTag(newParams);
    }}  className={`flex flex-col cursor-pointer ${tag === name ? "bg-dark-0 hover:bg-[#3b3a44]" : "bg-[#3b3a44]"} items-start px-[18px] py-4 h-[150px] w-52 overflow-hidden rounded-md drop-shadow gap-3 transition duration-200 hover:drop-shadow-lg justify-between`}>
        <div className="flex max-h-[100px] h-full truncate w-full gap-2  items-center justify-between flex-col">
          <div className="flex items-center border-b pb-2 border-white/10 w-full gap-1.5">
            {icon}
            <h1 className="capitalize  text-lg ">{name}</h1>
          </div>
          <p className="text-[12px] max-h-[80px] h-full w-full text-wrap">{description}</p>
        </div>
        <div className="flex relative items-center">
          {images.map((item, index) => <LazyLoadImage key={item.image + name} alt={name} src={item.image} width={25} height={25}  className={`rounded-full hover:scale-110 transition duration-200 ease-in-out bg-black/20`} 
      style={{ marginLeft: index > 0 ? '-6.5px' : '0' }} />)}
        </div>
    </div>
  )
}

export default FilterCard