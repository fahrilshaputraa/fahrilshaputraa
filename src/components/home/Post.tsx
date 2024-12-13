import { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    link: string;
    published: string;
}

export default function Post() {
    const [posts, setPosts] = useState<Post[]>([]);  

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://v1.nocodeapi.com/fahrilshaputra/medium/YQhoCPfXUvXueGpw');
                const result = await response.json();
                
                const limitedPosts = result.slice(0, 3);
                setPosts(limitedPosts);  
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);  

    return (
        <section id="post" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Postingan Terbaru</h2>
                        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
                            Artikel dan tips seputar web development
                        </p>
                    </div>
                    <a href="https://medium.com/@fahrilshaputra" target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition group gap-2"
                    data-aos="fade-up" data-aos-delay="200">
                    <span className="hidden md:block">Lihat Semua Postingan</span>
                    <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

                {/* Menampilkan data artikel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => {
                        // Calculate reading time based on word count
                        const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
                        const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute

                        return (
                            <div key={post.id} className="group hover:shadow-lg transition duration-300 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                                <a href={post.link} target="_blank" className="block">
                                    <img 
                                        src={post.content.match(/src="([^"]+)"/)?.[1] || '/default-image.jpg'} 
                                        alt="Post Image" 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 bg-white">
                                        <span className="text-blue-600 text-sm font-medium">Blog</span>
                                        <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            {post.content.split('<p>')[1].split('</p>')[0]}
                                        </p>
                                        <div className="mt-4 flex items-center">
                                            <span className="text-sm text-gray-500">{readingTime} min read</span>
                                            <span className="mx-2">•</span>
                                            <span className="text-sm text-gray-500">{new Date(post.published).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
