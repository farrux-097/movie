import { memo } from "react";

const MovieViewSkeleton = () => {
  return (
    <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          {/* Poster skeleton */}
          <div className="w-full h-[350px] bg-[#282828] rounded-lg"></div>

          <div className="p-2 space-y-2">
            {/* Title skeleton */}
            <div className="h-4 w-3/4 bg-[#282828] rounded"></div>

            {/* Rate skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 bg-[#282828] rounded"></div>
              <div className="h-4 w-10 bg-[#282828] rounded"></div>
            </div>

            {/* Vote average skeleton */}
            <div className="h-4 w-12 bg-[#282828] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieViewSkeleton);
