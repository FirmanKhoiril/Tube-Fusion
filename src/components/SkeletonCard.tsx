const SkeletonCard = () => {
    return (
      <div className="animate-pulse flex space-x-4  py-5 px-4 sm:px-6 bg-[#2C2B33] rounded-lg">
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 bg-gray-500 rounded w-3/4"></div>
          <div className="h-2 bg-gray-500 rounded"></div>
          <div className="h-2 bg-gray-500 rounded w-5/6"></div>
        </div>
      </div>
    );
  };
  

export default SkeletonCard