import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import "../styles/welcome-section.css"

export default function WelcomeSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Front-End Engineer"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    }

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [typedText])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-intro">Personal, Business and Tech Development</div>
        <h1 className="hero-title">
          <span className="hero-name">Alexa Dominguez</span>
        </h1>
        <h2 className="hero-subtitle">
          {typedText}
          <span className={`cursor ${showCursor ? "cursor-visible" : "cursor-hidden"}`}>|</span>
        </h2>
        <p className="hero-description">
          Complex ideas into elegant, intuitive interfaces. Clean code and thoughtful
          design that delight users and drive business goals.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-button">
              View My Work 
              <ArrowRight className="button-icon" />
            </button>
          </a>
          <a href="#contact">
            <button className="secondary-button">Contact Me</button>
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.github.com/aledosa" className="social-link">
            <Github/>
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/alexa-dominguez" className="social-link">
            <Linkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="/" className="social-link">
            <Mail />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

    </section>
  )
}

