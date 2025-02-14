import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image"; 
import mew from "../../public/mew.gif"; 

export const Introduction = () => {
    return (
        <main className="flex-2 p-4 font-titillium font-semibold w-full">
            <section className="container max-w-7xl rounded-lg p-8 flex flex-col md:flex-row gap-8 mx-auto pt-20 justify-center items-center">
                {/* Image Section */}
                <div className="flex order-1 md:order-2">
                    <Image
                        src={mew}
                        alt="mew"
                        className="w-48 sm:w-64 md:w-full md:max-w-sm rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6 animate-fade-down animate-once">
                        Desenvolvedor Web & Entusiasta de Tecnologia
                    </h1>
                    <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                        Sou Kayk, um desenvolvedor frontend experiente, apaixonado por aprendizado contínuo e por criar soluções inovadoras para web e mobile.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-4 cursor-pointer">
                        <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors  ">
                            <FaGithub size={24} />
                            <span>GitHub</span>
                        </a>

                        <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaInstagram size={24} />
                            <span>Instagram</span>
                        </a>

                        <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};
