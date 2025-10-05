import { TitleSection } from "@/components/public/section/title-section";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  title?: string;
  children: React.ReactNode;
};

export function Section({ title, children, className, ...props }: Props) {
  return (
    <section
      {...props}
      className={twMerge(
        `relative flex flex-col items-center justify-center px-6 py-12`,
        className,
      )}
    >
      <div className="z-10 flex w-full max-w-9xl flex-col gap-6">
        {title && <TitleSection title={title} />}
        <div className="flex flex-wrap gap-8">{children}</div>
      </div>
    </section>
  );
}
