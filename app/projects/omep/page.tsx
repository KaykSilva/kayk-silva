import { FaLink } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { MdCircle } from "react-icons/md";
import { Footer } from "@/components/footer/footer";

export default function Omep() {
    return (
        <div className="flex items-center justify-center mt-20 flex-col">
            {/* Seção 1: Título e Botão */}
            <div className="w-full max-w-4xl px-4">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-gray-800 text-2xl md:text-4xl font-titillium font-semibold">
                        Observatório Maranhense do Emprego e Produção (OMEP)
                    </h1>
                    <a
                        href="https://ifmaomep.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 w-32 rounded-lg dark:bg-zinc-700 bg-blue-600 dark:text-white text-white cursor-pointer border-2 border-transparent hover:dark:border-zinc-500 hover:border-blue-500 transition-all duration-300"
                    >
                        <FaLink className="mr-2" />
                        <span>URL</span>
                    </a>
                </div>

                {/* Imagem */}
                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/omep.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* Seção 2: Visão Geral */}
            <div className="w-full max-w-4xl px-4 mt-20">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-gray-800 text-2xl md:text-4xl font-titillium font-semibold">
                        Visão geral
                    </h1>
                </div>

                <div className="mt-8">
                    <p className="dark:text-gray-400 text-gray-600 md:text-left text-left">
                        O Observatório Maranhense do Emprego e Produção (OMEP) é um grupo interdisciplinar de pesquisa vinculado ao Laboratório de Inovações e Pesquisas em Informática (LiPi), sediado no IFMA/Campus Araioses. Ele tem como foco principal de estudo a análise do campo econômico e social ligado aos fenômenos industriais existentes no estado do Maranhão, como os Arranjos Produtivos Locais (APLs) e setores produtivos.
                    </p>
                </div>
            </div>

            {/* Seção 3: Tecnologias */}
            <div className="w-full max-w-4xl px-4 mt-10">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-gray-800 text-2xl md:text-4xl font-titillium font-semibold">
                        Tecnologias
                    </h1>
                </div>

                {/* Container para Frontend e Backend */}
                <div className="mt-8 flex flex-col md:flex-row gap-8">
                    {/* Coluna Frontend */}
                    <div className="flex-1">
                        <h2 className="dark:text-white text-gray-800 text-xl md:text-2xl font-titillium font-semibold mb-4">
                            Frontend
                        </h2>
                        <div className="flex flex-col dark:text-gray-400 text-gray-600">
                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> HTML5
                                </a>

                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://nodejs.org/pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> CSS3
                                </a>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://nodejs.org/pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> JavaScrip
                                </a>
                            </div>


                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="hhttps://getbootstrap.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> BootStrap
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção 4: Recursos */}
            <div className="w-full max-w-4xl px-4 mt-10">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-gray-800 text-2xl md:text-4xl font-titillium font-semibold">
                        Recursos
                    </h1>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/omep2.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/omep3.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="mt-1">
                    <p className="dark:text-gray-400 text-gray-600 md:text-left text-left">
                        Mapa interativo, destacando cada cidade do Maranhão que possui campus do IFMA
                    </p>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/omep4.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/omep5.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>

                <div className="mt-1">
                    <p className="dark:text-gray-400 text-gray-600 md:text-left text-left">
                        Informações detalhada sobre a região e os Arranjos produtivos locais (APLs)

                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
