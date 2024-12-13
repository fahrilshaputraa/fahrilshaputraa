import Hero from '../components/home/Hero.tsx'
import About from '../components/home/About.tsx'
import Services from '../components/home/Services.tsx'
import Project from '../components/home/Project.tsx'
import Post from '../components/home/Post.tsx'
import Contact from '../components/home/Contact.tsx'

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Project />
            <Post />
            <Contact />
        </div>
    )
}