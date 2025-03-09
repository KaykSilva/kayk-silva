export default function Contact() {
    return (
        <main className="flex items-center justify-center flex-col">
            <div>
                <img src="/404.gif" alt="so cute" className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-112 object-cover " />
            </div>
            <h1 className="text-2xl text-center sm:text-2xl md:text-5xl font-titillium font-semibold text-gray-800 dark:text-gray-200 mb-6 animate-fade-down animate-once p-5">
                Peço desculpas, mas esta página ainda está em construção.
            </h1>
            <a
                href="/"
                className="mt-4 px-6 py-2  text-center rounded-sm dark:bg-zinc-700 bg-blue-600 dark:text-white text-white cursor-pointer border-2 border-transparent hover:dark:border-zinc-500 hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
            >
                Voltar
            </a>
        </main>
    );
}