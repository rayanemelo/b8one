import { CartButton } from "@/layout/public/header/components/cart-button/cart-button";
import { Logo } from "@/components/public/logo/logo";

export function Header() {
  return (
    <header className="md:flex hidden justify-center h-20 w-full bg-white px-4 shadow-lg">
      <div className="flex justify-between items-center max-w-9xl w-full">
        <Logo />
        <div className="flex items-center gap-9">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
