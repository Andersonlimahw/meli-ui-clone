import { FC } from "react";

export interface MenuItemProps {
    label: string,
    link: string,
    handleClick?: () => void
}

export const MenuItem: FC<MenuItemProps> = (props: MenuItemProps) => {
    const handleClickItem = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {    
        // event.preventDefault();
        const element = document.getElementById(props.link);
        if (element) {
            const offsetTop = element.offsetTop;
            const adjustedOffsetTop = offsetTop - 140;
            window.scrollTo({ top: adjustedOffsetTop, behavior: 'smooth' });
            props.handleClick && props.handleClick();
        }
    };
    return (
        <a href={props.link}  onClick={(event) => handleClickItem(event)}  className="py-1 px-4 cursor-pointer bg-gradient-to-tr from-zinc-400 to-zinc-200 bg-clip-text font-sans text-2xl font-semibold leading-tight tracking-normal text-transparent antialiased visited:text-zinc-400 active:text-green-600 hover:text-green-600 hover:scale-110">
            {props.label}
        </a>            
    )
}