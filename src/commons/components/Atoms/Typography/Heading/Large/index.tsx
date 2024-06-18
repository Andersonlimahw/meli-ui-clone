import { FC, PropsWithChildren } from "react";

export const HeadingLarge : FC<PropsWithChildren> = ({ children } : PropsWithChildren) => {
    return(<h1 className="z-9 py-1 bg-gradient-to-tr from-zinc-800 to-zinc-900 bg-clip-text font-sans lg:text-6xl sm:text-3xl font-semibold leading-tight tracking-normal text-transparent antialiased">{children}</h1>)
}