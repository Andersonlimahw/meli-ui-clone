import { FC, ReactNode } from "react";

import { CardTitle } from './Title';
import { CardDescription } from './Description';
import { CardFooter } from './Footer';
import { CardImage } from "./CardImage";
import { CardSkills } from "./CardSkills";

interface CardProps {
    title: string,
    description?: string,
    icon?: ReactNode,
    linkUrl: string,
    linkLabel: string,
    imageUrl?: string,
    iconList?: string[]
};

export const Card: FC<CardProps> = ({
    title,
    description,
    icon,
    linkUrl,
    linkLabel,
    imageUrl,
    iconList
}: CardProps) => {

    return (
            <div className="relative 
                mt-6 
                flex 
                sm:w-95
                md:w-96 

                flex-col 
                mx-auto 
                grow-1 
                rounded-xl
                bg-white-800 
                bg-clip-border
                text-zinc-900                 
                shadow-xl 
                shadow-white-500/50
                hover:shadow-zinc-500/50
                border-x-2 
                border-y-1 
                hover:border-primary-yellow-800 
                border-primary-yellow-900
                transition-all duration-500 ease-in-out
                ">
                {
                    imageUrl && (
                        <div className="p-4">
                            <CardImage
                                src={imageUrl}
                                variant="thumbnail"
                            />
                        </div>
                        
                    )
                }
                <div className="p-6">
                    <CardTitle icon={icon} title={title} />
                    {
                        description && 
                        description.length > 0 && 
                        (<CardDescription description={description} />)
                    }
                </div>
                {
                    iconList && 
                    iconList.length > 0 && 
                    (<CardSkills iconList={iconList} />)
                }
                <CardFooter linkLabel={linkLabel} linkUrl={linkUrl} />
            </div>
    )
}