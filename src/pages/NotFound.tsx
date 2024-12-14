import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Tidak Ditemukan</h2>
                    <p className="text-gray-600">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#1D4ED8] text-white rounded-full hover:bg-blue-700 transition"
                    >
                        <span className="mr-2">←</span>
                        Hubungi Saya
                    </Link>
                    <Link 
                        to="/project"
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transition"
                    >
                        Lihat Portfolio
                        <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
} 