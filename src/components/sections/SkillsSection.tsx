"use client"

import { useEffect, useRef } from "react"
import { Code, Layers, Layout, Palette, Sparkles, Zap } from "lucide-react"
import "../styles/skills-section.css"

export default function SkillsSection() {
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
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".skill-card")
      elements.forEach((el, index) => {
        // Add delay based on index
        el.setAttribute("style", `--animation-delay: ${index * 0.1}s`)
        observer.observe(el)
      })
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".skill-card")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const skills = [
    {
      title: "Modern Frameworks",
      icon: <Layout className="skill-icon" />,
      description: "Building scalable applications with modern JavaScript frameworks.",
      technologies: ["React", "Angular.js", "Semantic UI", "React Native", "TypeScript", "Redux", "Javascript", "Bootstrap"],
    },
    {
      title: "UI/UX Implementation",
      icon: <Palette className="skill-icon" />,
      description: "Translating designs into pixel-perfect, responsive interfaces.",
      technologies: ["CSS Architecture", "Styled Components", "Motion", "Design Systems"],
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="skill-icon" />,
      description: "Optimizing web applications for speed and user experience.",
      technologies: ["Lazy Loading", "Code Splitting", "Bundle Analysis", "Core Web Vitals"],
    },
    {
      title: "Accessibility",
      icon: <Sparkles className="skill-icon" />,
      description: "Creating inclusive experiences that work for everyone.",
      technologies: ["Semantic HTML", "Keyboard Navigation", "Screen Readers", "Apps Flow Analysis", "CSS"],
    },
    {
      title: "Frontend Architecture",
      icon: <Layers className="skill-icon" />,
      description: "Designing scalable and maintainable frontend systems.",
      technologies: ["Component Libraries", "Micro-frontends", "State Management", "API Integration"],
    },
    {
      title: "Testing & Quality",
      icon: <Code className="skill-icon" />,
      description: "Ensuring reliability through comprehensive testing strategies.",
      technologies: ["Jest", "React Testing Library", "A/B Testing", "Storybook", "CI/CD", "E2E Testing"],
    },
  ]

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">Expertise</div>
          <h2 className="section-title">Specialized skills & technologies</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card animate">
              <div className="skill-icon-container">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-tags">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

