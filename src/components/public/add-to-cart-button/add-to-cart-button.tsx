import { Button } from "@/components/ui/button";

export function AddToCartButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="h-11 w-full rounded-none uppercase hover:bg-black/80">
      Adicionar ao Carrinho
    </Button>
  );
}
