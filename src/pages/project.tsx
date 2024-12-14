import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const [projectsResponse, countResponse] = await Promise.all([
                    fetch(`https://strapi.dev-sti-group.biz.id/projects?_start=${(currentPage - 1) * projectsPerPage}&_limit=${projectsPerPage}`),
                    fetch('https://strapi.dev-sti-group.biz.id/projects/count')
                ]);

                const projectsData = await projectsResponse.json();
                const totalCount = await countResponse.json();

                setProjects(projectsData);
                setTotalProjects(totalCount);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, [currentPage]);

    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    return (
        <div className="min-h-screen bg-gray-50 pt-28">
            <div className="w-full md:max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 text-gray-900" data-aos="fade-up">
                        Portfolio Projects
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Kumpulan karya dan project terbaik yang telah saya kerjakan dengan passion dan dedikasi tinggi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: any) => (
                        <div 
                            key={project.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                        >
                            <div 
                                className="relative overflow-hidden aspect-[16/9] cursor-pointer"
                                onClick={() => navigate(`/project/${project.id}`)}
                            >
                                <img 
                                    src={`https://strapi.dev-sti-group.biz.id${project.Image.url}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.tags.map((tag: any) => (
                                        <span 
                                            key={tag.name}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <h2 
                                    onClick={() => navigate(`/project/${project.id}`)}
                                    className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.Body.slice(0, 150)}...
                                </p>
                                <div className="flex items-center justify-between border-t pt-4 mt-4">
                                    <span className="text-gray-500 text-sm">
                                        {new Date(project.created_at).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                    <button 
                                        onClick={() => navigate(`/project/${project.id}`)}
                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group/btn"
                                    >
                                        Baca selengkapnya
                                        <span className="transform group-hover/btn:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-2 mt-16 mb-20">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition"
                    >
                        ←
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg transition ${
                                currentPage === page
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
