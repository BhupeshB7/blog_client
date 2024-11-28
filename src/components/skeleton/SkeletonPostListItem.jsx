import React from "react";

const SkeletonPostListItem = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 animate-pulse">
      {/* Skeleton for Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <div className="bg-gray-300 rounded-xl w-full h-48"></div>
      </div>

      {/* Skeleton for Text Content */}
      <div className="flex flex-col gap-2 w-full md:w-3/4">
        <div className="bg-gray-300 w-3/4 h-6 rounded"></div>
        <div className="bg-gray-200 w-full h-4 mt-2 rounded"></div>
        <div className="bg-gray-200 w-1/3 h-4 mt-2 rounded"></div>
        <div className="bg-gray-200 w-2/3 h-4 mt-2 rounded"></div>
        <div className="bg-gray-300 w-1/4 h-4 mt-2 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonPostListItem;
