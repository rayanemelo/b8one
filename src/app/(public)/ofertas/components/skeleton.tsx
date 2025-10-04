export function SkeletonOfertas() {
  return (
    <div className="animate-pulse w-full grid grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="rounded-md p-4 w-full">
          <div className="bg-gray-300 h-[375px] mb-4 rounded"></div>
          <div className="h-6 bg-gray-300 mb-2 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 mb-2 rounded w-1/2"></div>
          <div className=" bg-gray-300 rounded-sm w-full h-11"></div>
        </div>
      ))}
    </div>
  );
} 