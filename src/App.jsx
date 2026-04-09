import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectsShowcase from './ProjectsShowcase';
import GPG from './GPG'; 

const Home = () => (
  <>
    <Navbar /> 
    <section id="home"><HeroSection /></section>
    <section id="projects"><ProjectsShowcase /></section>
    <section id="contact"><Contact /></section>
  </>
);

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden bg-black min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/gpg" element={<GPG />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;