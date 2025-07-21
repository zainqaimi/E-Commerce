import React from "react";

function CardSkeleton() {
  return (
    <div className="p-4 w-full max-w-xs bg-white">
      <div className="animate-pulse">
        <div className="bg-gray-400 h-52 rounded-md mb-6"></div>
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-400 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;
