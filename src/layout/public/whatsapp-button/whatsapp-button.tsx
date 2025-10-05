import { WhatsappIcon } from "./icon";

const data = {
  phone: "11999999999",
  message: "Olá, gostaria de saber mais sobre...",
};

export function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${data.phone}?text=${data.message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 p-2 transition hover:bg-green-600"
    >
      <WhatsappIcon className="inline-block h-7 w-7" />
    </a>
  );
}
