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
                    <h1 className="dark:text-white text-black text-2xl md:text-4xl font-titillium font-semibold">
                        Dashmed
                    </h1>
                    <a
                        href="https://www.dashmed.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 w-32 rounded-lg bg-zinc-700 text-white cursor-pointer border-2 border-transparent hover:border-zinc-500 transition-all duration-300"
                    >
                        <FaLink className="mr-2" />
                        <span>URL</span>
                    </a>
                </div>

                {/* Imagem */}
                <div className="mt-8 flex items-center justify-center">
                    <img
                        src="/furina.png"
                        alt="Imagem"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* Seção 2: Visão Geral */}
            <div className="w-full max-w-4xl px-4 mt-20">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-black text-2xl md:text-4xl font-titillium font-semibold">
                        Visão geral
                    </h1>
                </div>

                <div className="mt-8">
                    <p className="text-gray-400 md:text-left text-left">
                        Uma plataforma integrada que revoluciona o atendimento em urgências e emergências médicas. Telemedicina, Inteligência Artificial (IA) e Prontuário Eletrônico do Paciente (PEP) reunidos em um único sistema para otimizar diagnósticos, melhorar prognósticos e salvar vidas.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-4xl px-4 mt-10">
                <div className="flex items-center justify-between">
                    <h1 className="dark:text-white text-black text-2xl md:text-4xl font-titillium font-semibold">
                        Tecnologias
                    </h1>
                </div>

                <div className="mt-8 flex flex-col text-gray-400 ">
                    <div className="flex items-center flex-row mb-4">
                        <a
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-blue-500 transition-all duration-300"
                        >
                            <MdCircle className="mr-2" />  React JS
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

                <div className="mt-8 w-full max-w-4xl px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="dark:text-white text-black text-2xl md:text-4xl font-titillium font-semibold">
                            Capuras de tela
                        </h1>
                    </div>

                    {/* Imagem */}
                    <div className="mt-8 flex items-center justify-center">
                        <img
                            src="/furina.png"
                            alt="Imagem"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                    
                    <div className="mt-8 flex items-center justify-center">
                        <img
                            src="/furina.png"
                            alt="Imagem"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}