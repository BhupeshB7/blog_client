const SkeletonSinglePage = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Post Details Skeleton */}
        <div className="flex gap-8">
          <div className="lg:w-3/5 flex flex-col gap-8">
            {/* Skeleton for Title */}
            <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded-md"></div>
            
            {/* Skeleton for Author, Category, and Date */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-1/3 h-4 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-1/4 h-4 bg-gray-300 animate-pulse rounded-md"></div>
              <div className="w-1/5 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
          
          {/* Skeleton for Post Image */}
          <div className="hidden lg:block w-2/5">
            <div className="w-full h-48 bg-gray-300 animate-pulse rounded-xl"></div>
          </div>
        </div>
  
        {/* Post Content Skeleton */}
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <div className="lg:text-lg flex flex-col gap-6 text-justify">
            {/* Skeleton for Content */}
            <div className="w-full h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
            <div className="w-full h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
            <div className="w-full h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
            <div className="w-full h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
          </div>
        </div>
  
        {/* Comments Section Skeleton */}
        <div className="mt-12">
          <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded-md mb-4"></div>
          <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
          <div className="w-2/3 h-6 bg-gray-300 animate-pulse rounded-md mb-4"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonSinglePage;
  