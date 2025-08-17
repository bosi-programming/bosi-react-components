import type { ReactNode } from 'react';

export interface PaperProps {
  children: ReactNode;
  className?: string;
}

export function Paper({ children, className }: PaperProps) {
  return (
    <div
      className={`p-4 border-black border rounded-md dark:border-white shadow-paper dark:shadow-paper-dark ${className ? className : ''}`}
    >
      {children}
    </div>
  );
}
