"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function AddToCartButton({ onClick }: { onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    onClick?.();
    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className="rounded-xs h-11 w-full bg-black uppercase hover:bg-black/80"
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
        </span>
      ) : (
        "Adicionar ao Carrinho"
      )}
    </Button>
  );
}
