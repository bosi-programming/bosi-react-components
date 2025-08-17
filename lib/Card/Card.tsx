import { type ReactNode } from 'react';
import { Typography } from '../Typography';

export interface CardProps {
  title: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, content, actions, className }: CardProps) {
  return (
    <div
      className={`px-5 py-6 flex justify-between flex-col items-center h-[365px] w-full md:w-[270px] rounded-3xl border-black border shadow-card dark:border-white dark:shadow-card-dark ${className ? className : ''}`}
      data-testid="card"
    >
      <Typography
        color="primary"
        size="h3"
      >
        {title}
      </Typography>
      <div className="mt-2">{content}</div>
      <div>{actions}</div>
    </div>
  );
}
