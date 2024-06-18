import { FC, PropsWithChildren } from "react";

export const HeadingMedium : FC<PropsWithChildren> = ({ children } : PropsWithChildren) => {
    return(<h2 className="z-9 py-1 bg-gradient-to-tr from-zinc-900 to-zinc-600 bg-clip-text font-sans text-4xl font-semibold leading-tight tracking-normal text-transparent antialiased">{children}</h2>)
}