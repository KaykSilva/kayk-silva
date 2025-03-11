import Link from "next/link";


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


            <section className="w-full rounded-lg p-4 sm:p-8 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            image: "/dashmed.png",
                            title: "DashMed",
                            description: "Um sistema de Telemedicina para atendimentos de emergência e urgência, utilizando inteligência artificial para auxiliar no pré-diagnóstico e tratamentos.",
                            route: "/projects/dashmed",
                        },
                        {
                            image: "/odonto-ease-logo.png",
                            title: "OdontoEase",
                            description: "OdontoEase: um sistema inteligente de gestão para clínicas odontológicas",
                            route: "/projects/odonto-ease",
                        },
                        {
                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg/1192px-Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg.png",
                            title: "Observatório Maranhense do Emprego e Produção (OMEP)",
                            description: "Plataforma para a divulgação do resultado da pesquisa do Observatório Maranhense do Emprego e Produção (OMEP)",
                            route: "/projects/omep",
                        },
                    ].map((exp, index) => (
                        <Link key={index} href={exp.route} className="block">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col md:flex-row items-center md:items-start gap-4 cursor-pointer">
                                <img src={exp.image} alt={exp.title} className="w-24 h-24 md:w-15 md:h-15 object-fill rounded-md bg-gray-600 p-2 bg-opacity-30" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{exp.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
