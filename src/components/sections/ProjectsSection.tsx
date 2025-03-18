import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Linkedin } from "lucide-react"
import "../styles/projects-section.css"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
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

  const projects = [
    {
      title: "Learning Management System",
      description: "Collaboration of design and development of client page and administration page for Scouting America.",
      image: "../../src/assets/online-learning.jpg",
      tags: ["React.Js", "Storybook", "TypeScript", "NPM", "Nginx", "Jenkins Pipeline"],
      liveUrl: "https://my.scouting.org/",
      githubUrl: "https://www.linkedin.com/company/scouting-america/",
    },
    {
      title: "Customer Relationship Management System",
      description: "Frontend leader developer for Florida Blue Delinquency Department.",
      image: "../../../src/assets/crm.jpg",
      tags: ["React.js", "MUI Components", "Redhat", "Swagger", "Redux", "Agile/Scrum Methodology"],
      liveUrl: "https://www.floridablue.com/",
      githubUrl: "https://www.linkedin.com/company/florida-blue/",
    },
    {
      title: "Healthcare Patient Portal",
      description:
        "An accessible patient portal with appointment scheduling, medical records, and telehealth integration.",
      image: "../../src/assets/online-healthcare.jpg?height=600&width=800",
      tags: ["Angular", "Redux", "AWS Code Commit", "Prime ng", "AWS","Frontend development","Agile/Scrum methodology"],
      liveUrl: "https://www.aryanow.com",
      githubUrl: "https://www.linkedin.com/in/aryanowcare/",
    },
    {
      title: "MVP Development",
      description: "Mobile app prototype to encourage the use of accessibility on applications based on time blindness.",
      image: "../../../src/assets/mobile-app.jpg?height=600&width=800",
      tags: ["React Native", "GCP", "Figma", "Firebase"],
      liveUrl: "https://www.digitalproductschool.io/",
      githubUrl: "https://www.linkedin.com/company/digital-product-school/",
    },
  ]

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">Portfolio</div>
          <h2 className="section-title">Developed project examples</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-layout">
          <div className="projects-list animate" data-animation="slide-right">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-item ${activeProject === index ? "project-item-active" : ""}`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-description">{project.description}</p>
                <div className="project-item-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && <span className="project-tag">+{project.tags.length - 3}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="project-showcase animate" data-animation="slide-left">
            <div className="project-showcase-wrapper">
              <img
                src={projects[activeProject].image || "/assets/react.svg"}
                alt={projects[activeProject].title}
                width={800}
                height={600}
                className="project-showcase-image"
              />
              <div className="project-showcase-content">
                <h3 className="project-showcase-title">{projects[activeProject].title}</h3>
                <p className="project-showcase-description">{projects[activeProject].description}</p>
                <div className="project-showcase-buttons">
                  <a href={projects[activeProject].liveUrl} className="primary-button project-button">
                    View Project Idea <ArrowUpRight className="button-icon" />
                  </a>
                  <a href={projects[activeProject].githubUrl} className="secondary-button project-button">
                    <Linkedin className="button-icon-left" /> Company Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-view-all">
          <a href="#projects">
            <button className="tertiary-button">
              View All Projects <ArrowUpRight className="button-icon" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

