import { useEffect, useState } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://strapi.dev-sti-group.biz.id/projects?_start=0&_limit=3");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                if (!abortController.signal.aborted) {
                    console.error("Error fetching projects:", error);
                }
            }
        };

        const abortController = new AbortController();
        fetchProjects();
        
        return () => abortController.abort();
    }, []);

    return (
        <section id="project" className="py-20 bg-gray-50">
            <div className="w-full md:max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Project Terbaru</h2>
                        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
                            Beberapa project yang telah saya kerjakan
                        </p>
                    </div>
                    <Link to="/project"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition group gap-2"
                    data-aos="fade-up" data-aos-delay="200">
                        <span className="hidden md:block">Lihat Semua Project</span>
                        <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project: any) => (
                        <Card
                        key={project.id}
                        image={`https://strapi.dev-sti-group.biz.id${project.Image.url}`}
                        title={project.title}
                        description={project.Body.slice(0, 100) + "..."}
                        tags={project.tags.tags.map((tag: any) => tag.name)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}