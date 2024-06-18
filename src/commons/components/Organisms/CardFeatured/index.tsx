import { FC, ReactNode } from 'react';
import { Section } from '../Section';
import { Icon } from '../../Atoms';
import { ProjectModel } from '../../../../models';

export interface CardFeaturedProps extends ProjectModel {    
   
}

export const CardFeatured: FC<CardFeaturedProps> = ({
    id,
    iconList,
    imageUrl,
    sectionTitle,
    sectionSubtitle,
    sectionDescriptions
}: CardFeaturedProps) => {
    return (
        <div id={id} className='w-full flex-1 bg-zinc-900 px-4'>
            <div className="flex lg:flex-row sm:flex-col max-w-screen-2xl m-auto">                
                <div className="xl:basis-1/2 lg:basis-1/2 md:w-full sm:w-full xs:w-full bg-zinc-900">
                    <div className='w-full px-4'>
                        <img loading="lazy" src={imageUrl} alt={sectionTitle} className='lg:h-[440px] sm:h-[320px] m-auto w-auto' />
                    </div>                    
                </div>

                <div className="xl:basis-1/2 lg:basis-1/2 md:w-full sm:w-full text-left">
                    <Section
                        title={sectionTitle}
                        subTitle={sectionSubtitle}
                    >
                        <div className="flex flex-col justify-center">
                            {
                                sectionDescriptions.map((description : ReactNode, index: number) => <div key={`${id}-${sectionTitle}-${index}`}>{description}</div>)
                            }
                        </div>
                        <div className="flex flex-row justify-start py-4">
                            {
                                iconList && iconList.map((iconItem, index) => (
                                    <div key={`${iconItem}-${index}`} className="rounded-full bg-white cursor-pointer p-2 hover:bg-green-500 mr-4">
                                        <Icon name={iconItem} size={16} />
                                    </div>
                                ))
                            }
                        </div>
                    </Section>
                </div>
            </div>
        </div>)

}