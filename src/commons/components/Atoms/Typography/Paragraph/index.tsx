import { FC, PropsWithChildren } from "react";

export const Paragraph : FC<PropsWithChildren> = ({ children } : PropsWithChildren) => {
    return(<p className="py-1 bg-gradient-to-tr from-zinc-200 to-zinc-300 bg-clip-text font-sans text-normal font-semibold leading-tight tracking-normal text-transparent antialiased">{children}</p>)
}