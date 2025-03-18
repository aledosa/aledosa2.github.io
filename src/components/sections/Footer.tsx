import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">AD</div>
          <div className="footer-copyright">
            <p className="footer-text">© {new Date().getFullYear()} Alexa Dominguez. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/alexa-dominguez" className="footer-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

