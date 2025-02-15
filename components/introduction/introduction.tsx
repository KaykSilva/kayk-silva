import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mew from "../../public/mew.gif";
import GitHubCalendar from 'react-github-calendar';

export const Introduction = () => {
    return (
        <main className="flex-2 p-4 font-titillium font-semibold w-full">
            <section className="container max-w-7xl rounded-lg p-8 flex flex-col md:flex-row gap-8 mx-auto pt-20 justify-center items-center">
                {/* Image Section */}
                <div className="flex order-1 md:order-2  md:mb-0">
                    <Image
                        src={mew}
                        alt="mew"
                        className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-112 object-cover"
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
                        <a href="https://github.com/KaykSilva" aria-label="GitHub" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaGithub size={24} />
                            <span>GitHub</span>
                        </a>

                        <a href="https://instagram.com/Kayk.blr" aria-label="Instagram" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaInstagram size={24} />
                            <span>Instagram</span>
                        </a>

                        <a href="https://linkedin.com/in/KaykSilva" aria-label="LinkedIn" className="flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contributions Section */}
            <section className="container max-w-5xl rounded-lg p-4 sm:p-8 mt-20 ml-0 md:ml-24">
                <div className="text-left">
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        Contribuições
                    </h2>
                </div>
                <div className="dark:bg-zinc-900 bg-slate-200 opacity-80 p-3 sm:p-6 rounded-sm overflow-x-auto">
                    <div className="w-full">
                        <GitHubCalendar username="KaykSilva" />
                    </div>
                </div>
            </section>

        </main>
    );
};