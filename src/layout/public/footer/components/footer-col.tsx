export function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-black">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}
