import { Button } from "@/components/ui/button";

export function AddToCartButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      className="rounded-none w-full h-11 hover:bg-black/80 uppercase"
    >
      Adicionar ao Carrinho
    </Button>
  );
}