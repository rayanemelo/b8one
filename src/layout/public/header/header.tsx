import { CartButton } from "@/components/public/cart-button/cart-button";
import { Logo } from "@/components/public/logo/logo";

type Props = {
  data: {
    logo: string;
    title: string;
  };
};

export function Header({ data }: Props) {
  const { title, logo } = data;

  return (
    <header className="md:flex hidden justify-center h-20 w-full bg-white px-4 shadow-lg">
      <div className="flex justify-between items-center max-w-9xl w-full">
        <Logo logoImageUrl={logo} title={title} />
        <div className="flex items-center gap-9">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
