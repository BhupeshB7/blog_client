export const SkeletonWrite = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full p-8 space-y-8  rounded-xl shadow-xl">
          <div className="w-24 h-6 bg-gray-300 rounded-md mb-6"></div>
  
          <div className="space-y-6">
            {/* Cover Image Skeleton */}
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
  
            {/* Title Skeleton */}
            <div className="w-full h-12 bg-gray-300 rounded-md mb-4"></div>
  
            {/* Category Skeleton */}
            <div className="w-1/4 h-12 bg-gray-300 rounded-md mb-4"></div>
  
            {/* Content Skeleton */}
            <div className="w-full h-32 bg-gray-300 rounded-md mb-4"></div>
  
            {/* Rich Text Editor Skeleton */}
            <div className="w-full h-72 bg-gray-300 rounded-md mb-4"></div>
  
            {/* Submit Button Skeleton */}
            <div className="w-full h-12 bg-gray-300 rounded-md mb-4"></div>
          </div>
        </div>
      </div>
    );
  };