import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className=" dark:text-white light:text-black py-8 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo or Image */}
                    <div className="flex items-center">

                        <span className="ml-4 text-lg font-semibold">Kayk Silva</span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <a href="https://github.com/KaykSilva" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://instagram.com/Kayk.blr" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com/in/KaykSilva" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    {/* Copyright Notice */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Kayk Silva. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};