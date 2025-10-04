import { CartButton } from "@/layout/public/header/components/cart-button/cart-button";
import { Logo } from "@/components/public/logo/logo";

export function Header() {
  return (
    <header className="hidden h-20 w-full justify-center bg-white px-4 shadow-lg md:flex">
      <div className="flex w-full max-w-9xl items-center justify-between">
        <Logo />
        <div className="flex items-center gap-9">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
