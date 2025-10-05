export function Skeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse px-4 py-6">
      <div className="mb-6 h-4 w-48 rounded bg-zinc-200" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="aspect-square w-full rounded bg-zinc-200" />
        <div className="space-y-4">
          <div className="h-6 w-2/3 rounded bg-zinc-200" />
          <div className="h-6 w-1/3 rounded bg-zinc-200" />
          <div className="h-4 w-1/2 rounded bg-zinc-200" />
          <div className="h-10 w-full rounded bg-zinc-200" />
          <div className="h-24 w-full rounded bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
