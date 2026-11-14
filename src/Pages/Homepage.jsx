import Navbar from "../Components/Navbar";
import "./Styles/Homepage.css";

import About from "../Components/About";
import Features from "../Components/Features";
import Steps from "../Components/howitworks";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Code for Hero Section*/}
      <section className="hero-section d-flex flex-column justify-content-center align-items-center">
        <p className="Lead fs-1">Welcome to TaskFlow</p>
        <p className="fs-3 info">Your all-in-one task management solution</p>
        <div className="d-flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              alert("Sign in to continue with TaskFlow");
              navigate("/signup");
            }}
          >
            Get Started
          </button>
          <a href="#about">
            <button className="btn btn-outline-dark">Learn More</button>
          </a>
        </div>
        <p className="mt-3 lastline">
          No credit card required. Start managing your projects today!
        </p>
      </section>

      <About />
      <Features />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default Homepage;
