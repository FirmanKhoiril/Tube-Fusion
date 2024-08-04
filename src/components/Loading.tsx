import { Triangle } from "react-loader-spinner"

interface ISizeLoading {
  width: number
  height: number
} 

const Loading = ({width, height}: ISizeLoading) => {
  return (
    <div className={` w-full`}>
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