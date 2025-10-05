import { formatToReal } from "@/utils/money";
import { Trash2 } from "lucide-react";
import Image from "next/image";

type Props = {
  handleRemove: () => void;
} & (Product & { quantity: number });

export function ProductItemMinicart({ handleRemove, ...item }: Props) {
  return (
    <li key={item.id} className="flex gap-3">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-zinc-100">
        <Image src={item.images[0]} alt={item.title} fill sizes="64px" className="object-cover" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <p className="truncate text-sm font-medium">{item.title}</p>
          <button
            aria-label="Remover item"
            className="text-zinc-400 hover:text-zinc-700"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-1 flex items-center justify-between text-xs text-zinc-600">
          <span>Quantidade: {item.quantity}</span>
          <span>Preço: {formatToReal(Number(item.price ?? 0))}</span>
        </div>

        <div className="mt-1 text-right text-sm font-semibold">
          {formatToReal(Number(item.price ?? 0) * item.quantity)}
        </div>
      </div>
    </li>
  );
}
