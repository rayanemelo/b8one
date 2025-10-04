import { HeartIcon } from "lucide-react";

export function WishlistButton() {
  return (
    <div className="border border-zinc-200 rounded-full w-10 h-10 flex items-center justify-center absolute top-2 right-2">
      <HeartIcon className="w-5 h-5 text-black" />
    </div>
  );
}