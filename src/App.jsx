import HeroSection from './HeroSection'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import ProjectsShowcase from './ProjectsShowcase'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-black'>
        {/* <div className="overflow-x-hidden absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-orange-400 to-transparent opacity-10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none group-hover:opacity-20 transition-opacity duration-300" />
      <div className="overflow-x-hidden absolute bottom-0 right-0 w-full h-full bg-gradient-to-bl from-violet-400 to-transparent opacity-10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none group-hover:opacity-20 transition-opacity duration-300" /> */}

      <Navbar /> 
      <section id="home"><HeroSection /></section>
      {/* <section id="about"><AboutSection /></section> */}
      <section id="projects"><ProjectsShowcase /></section>
      <section id="contact"><Contact /></section>
<Footer />

    </div>
  )
}

export default App
