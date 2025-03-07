import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import mew from "../../public/mew.gif";
import GitHubCalendar from 'react-github-calendar';
import { Footer } from "@/components/footer/footer";


export const Introduction = () => {

    return (
        <main className="flex-2 p-4 font-titillium font-semibold w-full  pl-0 md:pl-24">
            {/* Profile Section */}
            <section className="rounded-lg p-8 flex flex-col md:flex-row gap-8 mx-auto pt-20 justify-center items-center">
                <div className="flex order-1 md:order-2 mr-0 md:mr-24">
                    <Image
                        src={mew}
                        alt="mew"
                        className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-112 object-cover"
                    />
                </div>

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
            <section className="container max-w-5xl rounded-lg p-4 sm:p-8 mt-20 ">
                <div className="text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        Contribuições
                    </h2>
                </div>
                <div className="dark:bg-zinc-900 bg-slate-200 opacity-80 p-3 sm:p-6 rounded-sm overflow-x-auto">
                    <div className="w-full">
                        <GitHubCalendar username="KaykSilva" />
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section className="container max-w-5xl rounded-lg p-4 sm:p-8 mt-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6">
                    Experiências de Trabalho
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[

                        {
                            image: "https://i.postimg.cc/FK7VC2zp/cais.png",
                            date: "Desenvolvedor Front-End 2024 - Atualmente",
                            description: "Atualmente, trabalho como desenvolvedor Front-End na startup DashMed, em colaboração com o CAIS HUB, no desenvolvimento de um sistema de Telemedicina para atendimentos de emergência e urgência, utilizando inteligência artificial para auxiliar no pré-diagnóstico e tratamentos."
                        },
                        {
                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg/1192px-Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg.png",
                            date: " Desenvolvedor Front-End 2023 - 2024",
                            description: "Trabalhei como desenvolvedor Front-End em uma startup em parceria com a Fábrica de Inovação do IFMA - Campus Araioses e a Clínica Odontológica Biodonto."
                        },
                        {
                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg/1192px-Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg.png",
                            date: "Desenvolvedor Front-End 2022 - 2023",
                            description: "Meu primeiro projeto pelo IFMA, desenvolvi um site para divulgar os resultados de uma pesquisa sobre Arranjos Produtivos Locais (APLs) em cidades do Maranhão que possuem campus do IFMA."
                        },


                    ].map((exp, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
                            <img src={exp.image} alt="experience" className="w-full h-40 object-contain rounded-md mb-4 bg-white" />
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{exp.date}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </main>
    );
};
