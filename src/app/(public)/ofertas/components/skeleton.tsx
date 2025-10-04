export function SkeletonOfertas() {
  return (
    <div className="grid w-full animate-pulse grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="w-full rounded-md p-4">
          <div className="mb-4 h-[375px] rounded bg-gray-300"></div>
          <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="mb-2 h-6 w-1/2 rounded bg-gray-300"></div>
          <div className="h-11 w-full rounded-sm bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
}
