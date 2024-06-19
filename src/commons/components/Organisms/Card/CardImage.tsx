import { FC, HTMLAttributes } from 'react';

interface CardImageProps extends HTMLAttributes<HTMLImageElement> {
    variant?: 'default' | 'rounded' | 'circle' | 'thumbnail';
    src?: string;
}

export const CardImage: FC<CardImageProps> = ({ variant = 'thumbnail' , ...otherProps }: CardImageProps) => {
    const variantClasses : any = {
        'default': 'rounded-none',
        'rounded': 'rounded-sm',
        'circle': 'rounded-full',
        'thumbnail': 'rounded-xs'
    }
    return (
        <img  className={`image ${variantClasses[variant]}`} 
            {...otherProps} 
            loading="lazy"
        />
    );
}