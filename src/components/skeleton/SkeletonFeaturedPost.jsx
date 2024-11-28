import React from "react";
import SkeletonPostListItem from "./SkeletonPostListItem"; 

const SkeletonFeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
      {/* First Post Skeleton */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="bg-gray-300 rounded-2xl w-full h-48"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-gray-300 w-12 h-6 rounded"></div>
            <div className="bg-gray-300 w-3/4 h-6 rounded"></div>
            <div className="bg-gray-300 w-16 h-4 rounded"></div>
          </div>
          <div className="bg-gray-200 w-full h-4 mt-3 rounded"></div>
        </div>
      </div>

      {/* Other Posts Skeleton */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {Array(3).fill().map((_, index) => (
          <SkeletonPostListItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonFeaturedPost;
