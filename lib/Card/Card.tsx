import { type ReactNode } from 'react';
import { Typography } from '../Typography';
import { Paper } from '../Paper';

export interface CardProps {
  title: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, content, actions, className }: CardProps) {
  return (
    <Paper
      className={`px-5 py-6 flex justify-between flex-col items-center h-[365px] w-full md:w-[270px] rounded-3xl ${className ? className : ''}`}
      data-testid="card"
      isCard
    >
      <Typography color="primary" size="h3">
        {title}
      </Typography>
      <div className="mt-2">{content}</div>
      <div>{actions}</div>
    </Paper>
  );
}
