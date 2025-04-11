import { Footer } from "@/components/footer/footer";
import { IoMdCodeDownload } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

export default function About() {
    return (
        <main className="flex-1 p-4 font-titillium font-semibold w-full pl-0 md:pl-24">
            <section className="rounded-lg p-8 flex flex-col md:flex-row gap-8 mx-auto pt-20 justify-center items-center">
                <div className="flex order-1 md:order-2 mr-0 md:mr-24 flex-col items-center">
                    <img
                        src='/me.jpg'
                        alt="mew"
                        className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-112 rounded-md object-cover"
                    />
                    <a
                        href="/KaykSilva.pdf"
                        download="KaykSilva.pdf"
                        className="mt-4 px-6 py-2 w-full text-center rounded-sm dark:bg-zinc-700 bg-blue-600 dark:text-white text-white cursor-pointer border-2 border-transparent hover:dark:border-zinc-500 hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
                    >
                        Baixar Currículo <IoMdCodeDownload className="ml-2" size={20} />
                    </a>
                    <div className="flex items-center direction-row mt-4">
                        <MdOutlineMail className="mr-2" /> kayksilva@outlook.de
                    </div>
                </div>

                <div className="flex-1 order-2 md:order-1 text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6 animate-fade-down animate-once text-left">
                        Eu sou Kayk Silva. Moro em Araioses, onde construo o futuro.
                    </h1>
                    <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-left">
                        Sou um estudante de tecnologia autodidata e voltado para a carreira, especializado em desenvolvimento front-end e código aberto, atualmente graduando nem Análise e Desenvolvimento de Sistemas. Minha especialidade é construir aplicativos web interativos no lado do cliente. Trabalho principalmente com tecnologias como JavaScript, TypeScript, Next.js, React.Js, React Native e Node.js.
                    </p>
                    <p className="mt-6 text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-left">
                        Acredito fortemente no aprendizado contínuo e na melhoria contínua, por isso tento o meu melhor para aprender em qualquer situação possível, desfavorável ou não.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}