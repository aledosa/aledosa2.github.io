import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/navbar.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href="/" className="logo">Alexa Dominguez</a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#about" className="nav-link"> About </a>
          <a href="#skills" className="nav-link"> Expertise </a>
          <a href="#projects" className="nav-link"> Portfolio </a>
          <a href="#contact" className="nav-link"> Contact </a>
          <a href="https://www.linkedin.com/in/alexa-dominguez">
            <button className="resume-button">Resume</button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <nav className="mobile-nav-container">
            <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Expertise
            </a>
            <a href="#projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <a href="https://www.linkedin.com/in/alexa-dominguez">
              <button className="mobile-resume-button">Resume</button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

