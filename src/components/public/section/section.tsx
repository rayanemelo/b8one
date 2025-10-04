import { TitleSection } from "@/components/public/section/title-section";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  title?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  children,
  className,
  ...props
}: Props) {

  return (
    <section
      {...props}
      className={twMerge(
        `relative flex flex-col items-center justify-center py-12 px-6 bg-[#F9F9F9]`,
        className
      )}
    >
      <div className="flex flex-col gap-6 max-w-9xl w-full z-10">
        {title && <TitleSection title={title} />}
        <div className="flex flex-wrap gap-8">{children}</div>
      </div>
    </section>
  );
}
