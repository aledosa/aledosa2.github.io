import  Navbar  from "./components/sections/Navbar"
import WelcomeSection  from "./components/sections/WelcomeSection"
import AboutSection from "./components/sections/AboutSection"
import SkillsSection from "./components/sections/SkillsSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/sections/Footer"
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
