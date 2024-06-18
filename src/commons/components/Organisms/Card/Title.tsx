import { FC, ReactNode } from 'react';

interface CardTitleProps {
    title: string,
    icon?: ReactNode
}
 
export const CardTitle: FC<CardTitleProps> = ({ title, icon }: CardTitleProps) => {
    return (
        <div className="flex items-center">
            {
                icon  ? (
                    <span className="px-4">
                        {icon}
                    </span>
                ) : (
                    <span className="px-2">
                    </span>
                )
            }
            <h5 className="py-1 bg-gradient-to-tr from-zinc-800 to-zinc-400 bg-clip-text font-sans text-2xl font-semibold leading-tight tracking-normal text-transparent antialiased">{title}</h5>
        </div>
    );
}