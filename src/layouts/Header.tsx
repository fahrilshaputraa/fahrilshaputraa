import { Link, useLocation } from "react-router-dom"
import { useState } from "react";

export default function Header() {
    const location = useLocation();
    const isActive = (path: string) => {
        if (path.startsWith('#')) {
            return location.hash === path;
        }
        return location.pathname === path;
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 py-3">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition">
                    <h1 className="text-xl font-bold text-blue-600">
                        Fahrilshaputra
                    </h1>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link 
                        to="/" 
                        className={`font-medium transition ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        Home
                    </Link>
                    <a 
                        href="/#about" 
                        className={`font-medium transition ${isActive('#about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        About
                    </a>
                    <a 
                        href="/#services" 
                        className={`font-medium transition ${isActive('#services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        Services
                    </a>
                    <Link 
                        to="/project" 
                        className={`font-medium transition ${isActive('/project') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        Project
                    </Link>
                    <a 
                        href="/#post" 
                        className={`font-medium transition ${isActive('#post') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        Post
                    </a>
                    <a 
                        href="/#contact" 
                        className={`font-medium transition ${isActive('#contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                </button>

                {/* Mobile Navigation */}
                <nav 
                    className={`fixed top-[65px] right-0 h-[calc(100vh-65px)] w-full bg-white/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out md:hidden
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex flex-col items-center pt-8 space-y-8">
                        <Link 
                            to="/" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '100ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Home
                        </Link>
                        <a 
                            href="/#about" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '150ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('#about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            About
                        </a>
                        <a 
                            href="/#services" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '200ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('#services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Services
                        </a>
                        <Link 
                            to="/project" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '250ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('/project') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Project
                        </Link>
                        <a 
                            href="/#post" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '300ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('#post') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Post
                        </a>
                        <a 
                            href="/#contact" 
                            onClick={toggleMenu}
                            style={{ transitionDelay: '350ms' }}
                            className={`text-xl font-medium transform transition-all duration-500
                                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}
                                ${isActive('#contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}