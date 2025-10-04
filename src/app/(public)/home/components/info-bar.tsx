import Link from "next/link";
import { Star, Instagram, Truck } from "lucide-react";

const mock = [
  {
    title: "Destaques da coleção",
    description: "Novas maquiagens e tendências em beleza.",
    link: "",
    icon: <Star className="h-6 w-6 shrink-0" />,
  },
  {
    title: "Siga nossas redes sociais",
    description: "@b8one",
    link: "",
    icon: <Instagram className="h-6 w-6 shrink-0" />,
  },
  {
    title: "Frete grátis acima de R$199",
    description: "Aproveite ofertas exclusivas em toda a loja.",
    link: "",
    icon: <Truck className="h-6 w-6 shrink-0" />,
  },
];

export function InfoBar() {
  const items = mock;

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-12 gap-6 bg-black text-white lg:h-28 px-2 lg:px-0 lg:py-0 py-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {items.map((item, index) => {
          return (
            <Link
              href={item.link ?? "#"}
              key={index}
              className="flex items-center gap-4 text-center lg:text-start"
            >
              <div className="text-white">{item.icon}</div>

              <div className="flex flex-col">
                {item.title && (
                  <p className="text-lg font-bold uppercase">{item.title}</p>
                )}
                {item.description && (
                  <p className="text-sm">{item.description}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
