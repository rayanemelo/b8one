import Link from "next/link";

export function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-black transition-colors hover:text-black/80">
        {children}
      </Link>
    </li>
  );
}
