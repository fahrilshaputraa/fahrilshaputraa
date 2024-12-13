import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 py-3">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition">
                <h1 className="text-xl font-bold text-blue-600">
                    Fahrilshaputra
                </h1>
            </Link>
            
            {/* <!-- Desktop Navigation --> */}
            <nav className="hidden md:flex space-x-8">
                <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 transition">About</a>
                <a href="#services" className="font-medium text-gray-700 hover:text-blue-600 transition">Services</a>
                <Link to="/project" className="font-medium text-gray-700 hover:text-blue-600 transition">Project</Link>
                <a href="#post" className="font-medium text-gray-700 hover:text-blue-600 transition">Post</a>
                <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>

            {/* <!-- Mobile menu button --> */}
            <button 
                data-mobile-menu
                className="md:hidden text-gray-700 focus:outline-none"
                aria-label="Toggle menu">
                <i className="fas fa-bars text-xl"></i>
            </button>

            {/* <!-- Mobile Navigation --> */}
            <nav 
                data-nav-menu
                className="fixed top-[65px] right-0 h-[calc(100vh-65px)] w-full bg-white/95 backdrop-blur-md transform translate-x-full transition-transform duration-500 ease-in-out md:hidden">
                <div className="flex flex-col items-center pt-8 space-y-8">
                <a href="#about" className="text-xl font-medium text-gray-700 hover:text-blue-600 transform translate-x-[100px] opacity-0 transition-all duration-500 delay-75">About</a>
                <a href="#services" className="text-xl font-medium text-gray-700 hover:text-blue-600 transform translate-x-[100px] opacity-0 transition-all duration-500 delay-100">Services</a>
                <a href="#project" className="text-xl font-medium text-gray-700 hover:text-blue-600 transform translate-x-[100px] opacity-0 transition-all duration-500 delay-150">Project</a>
                <a href="#post" className="text-xl font-medium text-gray-700 hover:text-blue-600 transform translate-x-[100px] opacity-0 transition-all duration-500 delay-200">Post</a>
                <a href="#contact" className="text-xl font-medium text-gray-700 hover:text-blue-600 transform translate-x-[100px] opacity-0 transition-all duration-500 delay-300">Contact</a>
                </div>
            </nav>
            </div>
        </header>
    )
}