'use client'
"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/ui/dark-mode';
import Image from 'next/image';

import logo from '../../public/logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-xl"
                        priority
                    />
                </div>

                {/* Menu para desktop */}
                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="dark:text-white text-black hover:text-blue-500 font-titillium font-semibold hover:border-b-2 dark:hover:border-white transition-all duration-300">Home</a>
                    <a href="/projects" className="dark:text-white text-black hover:text-blue-500 font-titillium font-semibold hover:border-b-2 dark:hover:border-white transition-all duration-300">Projetos</a>
                    <a href="/about" className="dark:text-white text-black hover:text-blue-500 font-titillium font-semibold hover:border-b-2 dark:hover:border-white transition-all duration-300">Sobre</a>
                    <a href="/contact" className="dark:text-white text-black hover:text-blue-500 font-titillium font-semibold hover:border-b-2 dark:hover:border-white transition-all duration-300">Contato</a>
                </nav>

                <ModeToggle />

                {/* Botão de menu para mobile */}
                <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Menu para mobile com animação */}
            <div
                className={`md:hidden shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <nav className="flex flex-col space-y-4 p-4 font-titillium font-semibold">
                    <a href="/" className="dark:text-white text-black hover:border-b-2 w-10 dark:hover:border-white transition-all duration-300">Home</a>
                    <a href="/projects" className="dark:text-white text-black hover:border-b-2 w-10 dark:hover:border-white transition-all duration-300">Projetos</a>
                    <a href="/about" className="dark:text-white text-black hover:border-b-2 w-12 dark:hover:border-white transition-all duration-300">Sobre</a>
                    <a href="/contact" className="dark:text-white text-black hover:border-b-2 w-12 dark:hover:border-white transition-all duration-300">Contato</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
