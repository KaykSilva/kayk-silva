import { FaLink } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { MdCircle } from "react-icons/md";
import { Footer } from "@/components/footer/footer";

export default function Dashmed() {
    return (
        <div className="flex items-center justify-center mt-20 flex-col">
            {/* Seção 1: Título e Botão */}
            <div className="w-full max-w-4xl px-4">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-gray-800 text-2xl md:text-4xl font-titillium font-semibold">
                        Dashmed
                    </h1>
                    <a
                        href="https://www.dashmed.tech"
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
                        src="/dashmed1.png"
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
                        Uma plataforma integrada que revoluciona o atendimento em urgências e emergências médicas. Telemedicina, Inteligência Artificial (IA) e Prontuário Eletrônico do Paciente (PEP) reunidos em um único sistema para otimizar diagnósticos, melhorar prognósticos e salvar vidas.
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
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> React JS
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                                <span className="pl-2">(Vite)</span>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://nodejs.org/pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> Node JS
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>


                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://ant.design/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> Ant Design
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <p className="flex items-center hover:text-blue-500 transition-all duration-300">
                                    <MdCircle className="mr-2" /> CSS 3
                                </p>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <p className="flex items-center hover:text-blue-500 transition-all duration-300">
                                    <MdCircle className="mr-2" /> TypeScript
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Backend */}
                    <div className="flex-1">
                        <h2 className="dark:text-white text-gray-800 text-xl md:text-2xl font-titillium font-semibold mb-4">
                            Backend
                        </h2>
                        <div className="flex flex-col dark:text-gray-400 text-gray-600">
                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://nodejs.org/pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> Node JS
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://expressjs.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> Express.js
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://www.mysql.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> MySQL
                                    <RxExternalLink className="ml-1" color="royalblue" />
                                </a>
                            </div>

                            <div className="flex items-center flex-row mb-4">
                                <a
                                    href="https://www.prisma.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-500 transition-all duration-300"
                                >
                                    <MdCircle className="mr-2" /> Prisma
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
                        src="/dashmed2.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="mt-1">
                    <p className="dark:text-gray-400 text-gray-600 md:text-left text-left">
                        Alertas em tempo real:
                        Identificação e notificação de condições críticas para equipes médicas.
                    </p>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/dashmed3.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/dashmed4.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="mt-1">
                    <p className="dark:text-gray-400 text-gray-600 md:text-left text-left">
                        Registro de dados clínicos seguros:
                        Digitalização completa de prontuários, com interoperabilidade entre sistemas de saúde.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}