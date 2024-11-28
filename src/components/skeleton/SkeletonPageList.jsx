const SkeletonPageList = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Adjust grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden flex flex-col">
              {/* Skeleton for Image */}
              <div className="w-full h-48 bg-gray-300 animate-pulse rounded-xl"></div>
              
              <div className="p-4 flex flex-col gap-3">
                {/* Skeleton for Title */}
                <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md"></div>
                
                {/* Skeleton for Author and Date */}
                <div className="flex flex-col gap-2">
                  <div className="w-1/3 h-4 bg-gray-300 animate-pulse rounded-md"></div>
                  <div className="w-1/2 h-4 bg-gray-300 animate-pulse rounded-md"></div>
                </div>
  
                {/* Skeleton for Description */}
                <div className="w-full h-4 bg-gray-300 animate-pulse rounded-md mt-3"></div>
  
                {/* Skeleton for Read More Link */}
                <div className="w-1/4 h-4 bg-gray-300 animate-pulse rounded-md mt-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkeletonPageList;
  