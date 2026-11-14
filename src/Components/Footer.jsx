import "./Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row gy-4 py-5">

          {/* About */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-logo">
              <i className="bi bi-kanban-fill me-2"></i>
              TaskFlow
            </h3>

            <p className="footer-description mt-3">
              TaskFlow is your smart project management
              companion. Organize tasks, collaborate with
              your team, and achieve your goals with ease.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>

            <ul className="contact-info">
              <li>
                <i className="bi bi-envelope-fill"></i>
                support@taskflow.example
              </li>

              <li>
                <i className="bi bi-telephone-fill"></i>
                +1 234 567 890
              </li>

              <li>
                <i className="bi bi-geo-alt-fill"></i>
                Available Worldwide
              </li>
            </ul>

            <p className="mt-3 footer-description">
              Have questions? We'd love to hear from you!
            </p>
          </div>

        </div>

        <hr />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TaskFlow.
            All Rights Reserved.
          </p>

          <p>
            Made with <i className="bi bi-heart-fill"></i> for
            better productivity.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
