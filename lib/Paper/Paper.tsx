import type { ReactNode } from "react";

export interface PaperProps {
  children: ReactNode;
  isCard?: boolean;
  className?: string;
}

export const nonCardClasses = "p-4 rounded-md";
export function Paper({ children, className, isCard, ...rest }: PaperProps) {
  return (
    <div
      className={`shadow-paper dark:shadow-paper-dark border border-black dark:border-white ${className ? className : ""} ${isCard ? "" : nonCardClasses}`}
      {...rest}
    >
      {children}
    </div>
  );
}
