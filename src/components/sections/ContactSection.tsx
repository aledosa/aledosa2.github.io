import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import "../styles/contact-section.css"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-subtitle">Contact</div>
          <h2 className="section-title">Let's discuss your project</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-layout">
          <div className="contact-info animate" data-animation="slide-right">
            <p className="contact-intro">
              I'm currently available for freelance work and full-time opportunities. If you're looking for a front-end
              engineer who can bring your vision to life with elegance and precision, let's connect.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon-container">
                  <Mail className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Email</h4>
                  <p className="contact-detail-text">adfavor3@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon-container">
                  <Phone className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Phone</h4>
                  <p className="contact-detail-text">+1 (415) 900-2800</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon-container">
                  <MapPin className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Location</h4>
                  <p className="contact-detail-text">Austin, TX</p>
                  <p className="contact-detail-text">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate" data-animation="slide-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message <Send className="button-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

