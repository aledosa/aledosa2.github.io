import { useEffect, useRef } from "react"
import "../styles/about-section.css"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".animate")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">About Me</div>
          <h2 className="section-title">The story behind my craft</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container animate" data-animation="slide-right">
            <div className="about-image-wrapper">
              <img
                src="./src/assets/team-working.jpg"
                alt="Software Development"
                width={600}
                height={600}
                className="about-image"
              />
              <div className="about-image-accent"></div>
            </div>
          </div>

          <div className="about-text animate" data-animation="slide-left">
            <h3 className="about-subtitle">My Approach</h3>
            <p className="about-description">
              With over 5 years of experience in front-end development, I've cultivated a deep understanding of creating
              seamless, accessible, and performant web applications. My journey began with a passion for the
              intersection of consulting and technology, which has guided my career ever since.
            </p>
            <p className="about-description">
              I specialize in crafting elegant user interfaces with modern frameworks like React Js, while
              maintaining a strong foundation in semantic HTML, CSS architecture, and JavaScript fundamentals. I believe
              in writing clean, maintainable code that scales with the business and accomplish client requirements.
            </p>

            <div className="about-details">
              <div className="about-detail">
                <h4 className="about-detail-title">Experience</h4>
                <p className="about-detail-text">
                  5+ Years
                  <br />
                  Front-End Development and Engineering
                </p>
              </div>
              <div className="about-detail">
                <h4 className="about-detail-title">Location</h4>
                <p className="about-detail-text">
                  Austin, TX
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

