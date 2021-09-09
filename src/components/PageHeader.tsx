import clsx from "clsx";
import { ReactNode } from "react";

export type PageHeaderProps = {
  className?: string;
  title: ReactNode;
};

/**
 * Simple header that displays a page title
 */
export function PageHeader({ className, title }: PageHeaderProps) {
  return (
    <header
      className={clsx(
        "bg-side-gray text-base md:text-2xl px-16 py-8 font-semibold",
        className
      )}
    >
      <h1>{title}</h1>
    </header>
  );
}
