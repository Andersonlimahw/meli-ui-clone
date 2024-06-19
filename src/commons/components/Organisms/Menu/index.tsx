import { MenuItem, MenuItemProps } from "./Item";

import { useState } from 'react';
import { TextOutdent, X } from "@phosphor-icons/react";

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
            label: 'Categorias',
            link: '/departamentos'
        },
        {
            label: 'Landings+',
            link: '/landings'
        }
    ];

    return (
        <nav className="w-full flex-1 h-[100px] static top-0 z-50 m-t-10 px-4 py-8 flex flex-row  bg-transparent">
            <div className="flex flex-row justify-center  max-w-screen-2xl">
                <div className="w-[120px] h-auto">
                    <img 
                    loading="lazy" 
                    src="https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png" 
                    alt="mercado livre" 
                    width="240" 
                    height="auto" 
                />
                </div>

               
                    <div className={`
                        flex flex-col md:flex-row justify-between mx-4 transition-all duration-800 ease-in-out 
                            ${isOpen ? 'block bg-transparent w-full h-[30vh] py-4 mt-16 flex-1 absolute left-0 ml-0' : 'hidden'} md:block`
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
                

                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden absolute right-8`}>
                    {isOpen ? <X size={32} color="#7ED959" /> : <TextOutdent size={32} color="#7ED959" />}
                </button>
            </div>
        </nav>
    )
}