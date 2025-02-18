import { Footer } from "@/components/footer/footer";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Projects() {
    return (
        <main className="flex-2 p-4 font-titillium font-semibold w-full pl-0 md:pl-24">
            {/* Profile Section */}
            <section className="rounded-lg p-8 flex flex-col md:flex-row gap-8 mx-auto pt-20 justify-center items-center">
                <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6 animate-fade-down animate-once">
                        Projetos
                    </h1>
                    <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                        Trabalhei em toneladas de pequenos projetos ao longo dos anos, mas estes são os que mais me orgulham. Muitos deles são de código aberto, então se você vir algo que desperte seu interesse, confira o código e contribua se tiver ideias sobre como ele pode ser melhorado.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="w-full rounded-lg p-4 sm:p-8 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            image: "https://cdn.discordapp.com/attachments/785241143557488681/1341213147322646528/logo.png?ex=67b52d94&is=67b3dc14&hm=6eeee96d99b981b764670e84bc4761f8b6029788572e5e4af7c2a31d4dcf97d1&",
                            title: "DashMed",
                            description: "Um sistema de Telemedicina para atendimentos de emergência e urgência, utilizando inteligência artificial para auxiliar no pré-diagnóstico e tratamentos."
                        },
                        {
                            image: "https://media.discordapp.net/attachments/785241143557488681/1341216688020131910/Group_2.png?ex=67b530e1&is=67b3df61&hm=9ec9eccf05e86dfeacbf0c862312a0de2e9ca0b0505214062070be58826e91eb&=&format=webp&quality=lossless&width=245&height=245",
                            title: "OdontoEase",
                            description: "Um sistema inteligente para gerencia de clínicas odontológicas de pequeno e médio porte."
                        },
                        {
                            image: "https://i.pinimg.com/736x/b7/bf/8a/b7bf8aa19e5b7d1d23d7c94a4a45d2bf.jpg",
                            title: "Ryo bot",
                            description: "Um bot para Discord, oferecendo recursos de gerenciamento de servidores e diversas opções de entretenimento para a sua comunidade."
                        },
                    ].map((exp, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col md:flex-row items-center md:items-start gap-4">
                            <img src={exp.image} alt="experience" className="w-24 h-24 md:w-15 md:h-15 object-fill rounded-md bg-gray-600 p-2 bg-opacity-30" />
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{exp.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}