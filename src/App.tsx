
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'
import WorkExperienceSection from './components/WorkExperienceSection'

function App() {

  return (
    <>
      <Navbar />
      <main>

      <HeroSection />
      <SkillsSection />
      <WorkExperienceSection />
      <Projects />
      <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App
