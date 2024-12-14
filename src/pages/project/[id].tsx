import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from '@/components/SEO';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`https://strapi.dev-sti-group.biz.id/projects/${id}`);
                const data = await response.json();
                setProject(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching project:", error);
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Project tidak ditemukan</h1>
                    <p className="text-gray-600 mb-6">Project yang Anda cari mungkin telah dihapus atau tidak tersedia.</p>
                    <button 
                        onClick={() => navigate('/project')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Kembali ke Project
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {project && (
                <SEO 
                    title={project.title}
                    description={project.Body.slice(0, 160)}
                    image={`https://strapi.dev-sti-group.biz.id${project.Image.url}`}
                    url={`https://fahrilshaputra.com/project/${id}`}
                    type="article"
                />
            )}
            <div className="min-h-screen bg-gray-50 pt-20">
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
                    <img 
                        src={`https://strapi.dev-sti-group.biz.id${project.Image.url}`}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="w-full md:max-w-3xl mx-auto px-4 -mt-32 relative z-10">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        {/* Tags & Date */}
                        <div className="flex flex-wrap gap-3 mb-6" data-aos="fade-up">
                            {project.tags.tags.map((tag: any) => (
                                <span 
                                    key={tag.name}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                                >
                                    {tag.name}
                                </span>
                            ))}
                            <span className="text-gray-500 text-sm ml-auto">
                                {new Date(project.created_at).toLocaleDateString('id-ID', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight" data-aos="fade-up">
                            {project.title}
                        </h1>

                        {/* Content */}
                        <div 
                            className="prose prose-lg max-w-none
                                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight
                                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                prose-strong:text-gray-900 prose-strong:font-bold
                                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
                                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                                prose-ul:list-disc prose-ul:pl-4
                                prose-ol:list-decimal prose-ol:pl-4
                                prose-li:text-gray-700 prose-li:mb-2
                                prose-pre:bg-gray-50 prose-pre:rounded-lg prose-pre:p-4
                                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded
                            "
                            dangerouslySetInnerHTML={{ __html: project.Body }}
                            data-aos="fade-up"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 mb-20 flex justify-between items-center">
                        <button 
                            onClick={() => navigate('/project')}
                            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition group gap-2"
                        >
                            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                            <span>Kembali</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
} 