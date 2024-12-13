import fahrilImage from "../../assets/img/v2Fahril.png";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative" data-aos="fade-right">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-lg -z-10"></div>
                <img 
                    src={fahrilImage} 
                    alt="Profile" 
                    className="rounded-lg shadow-lg object-cover w-full h-[600px]" 
                    />
                </div>
                <div data-aos="fade-left">
                <h2 className="text-4xl font-bold mb-6">Tentang Saya</h2>
                <p className="text-gray-600 mb-6 text-lg">
                    Seorang web developer yang fokus pada pengembangan website menggunakan HTML, CSS, JavaScript, dan PHP, dengan pengalaman dalam membuat solusi web yang fungsional dan user-friendly.
                </p>          
                <div className="grid grid-cols-2 gap-6">
                    <div>
                    <h3 className="font-semibold text-lg mb-2">Skills</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>HTML & CSS</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>JavaScript</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Tailwind CSS</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Bootstrap</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>React.js</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>PHP</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Python</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Dan Lainnya</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-lg mb-2">Tools</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>VS Code</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Figma</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Git</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Tldraw</li>
                        <li><i className="fas fa-check text-blue-600 mr-2"></i>Photoshop</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}