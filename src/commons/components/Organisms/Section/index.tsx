import { FC, PropsWithChildren } from "react";
import { HeadingLarge, HeadingMedium } from "../../Atoms/Typography";

interface SectionProps extends PropsWithChildren {
    id?: string,
    title: string,
    subTitle: string, 
    
}

export const Section : FC<SectionProps> = ({ 
    id,
    title, 
    subTitle, 
    children
} : SectionProps) => {
    return(
        <section id={id} className="flex-1 relative py-8  sm:px-4 md:px-8 w-full bg-zinc-900">
                <HeadingLarge>
                    {title}
                </HeadingLarge>
                <HeadingMedium>
                    {subTitle}
                </HeadingMedium>
                <div className="py-4">
                    {children}
                </div>
        </section>
    )
}