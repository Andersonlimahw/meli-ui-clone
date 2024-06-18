import { FC, PropsWithChildren } from "react";

export const HeadingSmall : FC<PropsWithChildren> = ({ children } : PropsWithChildren) => {
    return(<h4 className="py-1 bg-gradient-to-tr from-zinc-800 to-zinc-500 bg-clip-text font-sans text-2xl font-semibold leading-tight tracking-normal text-transparent antialiased">{children}</h4>)
}