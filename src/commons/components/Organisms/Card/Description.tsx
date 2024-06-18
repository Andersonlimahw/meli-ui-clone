import { FC } from 'react';

interface CardDescriptionProps {
    description: string,
}

export const CardDescription: FC<CardDescriptionProps> = ({ description }: CardDescriptionProps) => {
    return (
        <p className="block font-sans  text-start p-4 font-light leading-relaxed text-inherit antialiased">
            {description}
        </p>
    );
}