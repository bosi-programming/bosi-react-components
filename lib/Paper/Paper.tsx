import type { ReactNode } from 'react';

export interface PaperProps {
  children: ReactNode;
  isCard?: boolean;
  className?: string;
}

export const nonCardClasses = 'p-4 rounded-md';
export function Paper({ children, className, isCard, ...rest }: PaperProps) {
  return (
    <div
      className={`border-black border dark:border-white shadow-paper dark:shadow-paper-dark ${className ? className : ''} ${isCard ? '' : nonCardClasses}`}
      {...rest}
    >
      {children}
    </div>
  );
}
