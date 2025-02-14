"use client"; // Certifique-se de que o componente é um Client Component

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones para o menu de hambúrguer
import { ModeToggle } from '@/components/ui/dark-mode';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 font-titillium font-semibold ">
                    Meu Logo
                </div>

                {/* Menu para desktop */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-titillium font-semibold">Home</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-titillium font-semibold">Sobre</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-titillium font-semibold">Serviços</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500 font-titillium font-semibold">Contato</a>
                </nav>
                <ModeToggle />


                {/* Botão de menu para mobile */}
                <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
                    {isOpen ? (
                        <X className="w-6 h-6 text-gray-800 dark:bg-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-800 dark:bg-white" />
                    )}
                </button>
            </div>

            {/* Menu para mobile com animação */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col space-y-4 p-4 font-titillium font-semibold">
                    <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">Sobre</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">Serviços</a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">Contato</a>
                </nav>

            </div>
        </header>
    );
};

export default Header;