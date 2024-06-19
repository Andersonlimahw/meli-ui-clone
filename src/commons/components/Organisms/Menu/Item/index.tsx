import { FC } from "react";
import { Link } from "react-router-dom";

export interface MenuItemProps {
    label: string,
    link: string,
    handleClick?: () => void
}

export const MenuItem: FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <Link to={props.link}  className="py-1 px-4 cursor-pointer bg-gradient-to-tr from-zinc-900 to-zinc-800 bg-clip-text font-sans text-normal font-semibold leading-tight tracking-normal text-transparent antialiased visited:text-zinc-400 active:text-zinc-900 hover:text-zinc-600 hover:scale-110">
            {props.label}
        </Link>            
    )
}