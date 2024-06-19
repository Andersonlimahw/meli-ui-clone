import { FC, ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'link'
    size: 'lg' | 'sm' | 'xs', 
    children: ReactNode | ReactNode[]
};

export const Button : FC<ButtonProps> = ({ variant, size, children, ...otherProps } : ButtonProps) => {
    // Dicitonay
    const variantClass : any = {
        'primary': 'bg-gradient-to-r from-white-300 from-10% via-yellow-400 via-50% to-yellow-300 to-90% text-zinc-800 hover:opacity-80',
        'secondary': 'bg-gradient-to-r from-zinc-600 from-10% via-zinc-100 via-30% to-zinc-300 to-90% text-zinc-900 hover:opacity-80',
        'link': 'bg-transparent  text-zinc-100 hover:opacity-90 hover:text-zinc-200 hover:font-bold hover:underline',
    };

    const sizeClass : any = {
        'lg': 'px-8 py-4',
        'sm': 'px-6 py-2',
        'xs': 'p-2'
    };

    const test = () => 1 === 1;

    return(
        <button            
            {...otherProps}
            className={`button my-1 uppercase opacity-95 rounded-3xl font-bold ${variantClass[variant]} ${sizeClass[size]} ${otherProps.className} `}
        >
            {children}
        </button>
    )
}