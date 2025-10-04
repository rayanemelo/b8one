import { HeartIcon } from "lucide-react";

export function WishlistButton() {
  return (
    <div className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200">
      <HeartIcon className="h-5 w-5 text-black" />
    </div>
  );
}
