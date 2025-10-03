export function FooterLine({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-2 text-black">
      <span className="text-black">{icon}</span>
      <span>{children}</span>
    </li>
  );
}