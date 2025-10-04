import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.ComponentProps<"div">;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge("w-full border p-6", className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export { Card };
