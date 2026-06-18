import type { ReactNode } from 'react';
import { Typography } from '../Typography';

interface BuyMeACoffeeProps {
  preText?: string;
  linkText: ReactNode;
  className?: string;
}

export function BuyMeACoffee({ linkText, preText, className }: BuyMeACoffeeProps) {
  return (
    <div className={className}>
      <Typography className="lg:text-base">
        {preText}
        <a
          href="https://www.buymeacoffee.com/bosi.programming"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-on-light dark:text-secondary-on-dark inline-block underline transition duration-300 ease-in-out hover:scale-110"
        >
          {linkText}
        </a>
      </Typography>
    </div>
  );
}
