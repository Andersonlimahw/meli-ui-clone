import { MenuItem, MenuItemProps } from "./Item";

import { useState } from 'react';
import { List, TextOutdent, X } from "@phosphor-icons/react";
import { MotionAnimate } from 'react-motion-animate';


const customAnimations = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems: MenuItemProps[] = [
        {
            label: 'Sobre mim',
            link: '/#about'
        },
        {
            label: 'Projetos',
            link: '/#projects'
        },
        {
            label: 'Blog',
            link: '/#posts'
        },
        {
            label: 'Contato',
            link: '/#contact'
        }
    ];

    return (
        <nav className="w-full flex-1 h-[100px] fixed top-0 z-50 m-t-10 px-4 py-8 flex flex-row  bg-zinc-900">
            <div className="flex flex-row justify-center  max-w-screen-2xl">
                <div className="w-[120px] h-auto mt-[-24px]">
                    <img loading="lazy" src="assets/images/logo_lemon_dev.png" alt="lemon.dev.br" width="100" height="auto" />
                </div>

                <MotionAnimate
                    animation="variant"
                    variant={customAnimations}
                    speed={0.8}
                    delay={0.5}
                    ease="easeInOut"
                >
                    <div className={`
                        flex flex-col md:flex-row justify-between mx-4 transition-all duration-800 ease-in-out 
                            ${isOpen ? 'block bg-zinc-900 w-full h-[30vh] py-4 mt-16 flex-1 absolute left-0 ml-0' : 'hidden'} md:block`
                    } >
                        {
                            menuItems.map((item) => (
                                <MenuItem
                                    key={item.label}
                                    link={item.link}
                                    label={item.label}
                                    handleClick={() => setIsOpen(false)}
                                />
                            ))
                        }
                    </div>
                </MotionAnimate>

                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden absolute right-8`}>
                    {isOpen ? <X size={32} color="#7ED959" /> : <TextOutdent size={32} color="#7ED959" />}
                </button>
            </div>
            <div className="w-[96vw] h-1 m-auto fixed top-24 bg-gradient-to-r from-green-500 from-10% via-green-300 via-30% to-emerald-500 to-90% -mr-10"></div>
        </nav>
    )
}