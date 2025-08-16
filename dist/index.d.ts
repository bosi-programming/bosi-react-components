import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The color of the button.
     */
    color?: 'primary' | 'success' | 'info' | 'warning' | 'error';
    /**
     * The size of the button.
     */
    size?: 'small' | 'medium' | 'large';
}

export declare type TColor = 'default' | 'primary' | 'secondary';

export declare type TSize = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'details';

export declare function Typography({ color, size, className, children, as, }: TypographyProps): JSX.Element;

export declare interface TypographyProps {
    color?: TColor;
    size?: TSize;
    className?: string;
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'details';
    children: ReactNode;
}

export { }
