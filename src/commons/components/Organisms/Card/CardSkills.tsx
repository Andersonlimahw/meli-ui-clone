import React, { FC } from 'react';
import {Icon } from '../../Atoms';

interface CardSkillsProps { 
    iconList: string[]
}

export const CardSkills: FC<CardSkillsProps> = ({ iconList }: CardSkillsProps) => {

    return (
        <div className="flex flex-row justify-start py-4 px-8">
                {
                    iconList && iconList.map((iconItem) => (
                        <div key={iconItem} className="rounded-full bg-white cursor-pointer p-2 hover:bg-green-500 mr-4">
                            <Icon name={iconItem} size={16} />
                        </div>
                    ))
                }
        </div>
    )
}