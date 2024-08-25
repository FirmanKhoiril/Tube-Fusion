import { Triangle } from "react-loader-spinner"

interface ISizeLoading {
  width: number
  height: number
  isLoading?: boolean
} 

const Loading = ({width, height, isLoading}: ISizeLoading) => {
  return (
    <div className={`${isLoading ? "w-full h-screen flex items-center justify-center": ""} `}>
          <Triangle
            visible={true}
            height={width}
            width={height}
            color="#10b981"
            ariaLabel="triangle-loading"
          />
         </div>
  )
}

export default Loading