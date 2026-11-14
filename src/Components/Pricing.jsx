import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started.",
      monthly: 0,
      yearly: 0,
      features: [
        "Up to 3 projects",
        "Basic task management",
        "Basic dashboard",
        "Email support",
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Everything you need to grow your productivity.",
      monthly: 12,
      yearly: 10,
      features: [
        "Unlimited projects",
        "Advanced task management",
        "Team collaboration",
        "Progress tracking",
        "Reports and analytics",
        "Priority support",
      ],
      button: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      description: "Advanced tools for growing teams.",
      monthly: 29,
      yearly: 24,
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced analytics",
        "Custom workflows",
        "Dedicated support",
        "Advanced security",
      ],
      button: "Get Started",
      popular: false,
    },
  ];

  return (
    <section className="Pricing-section py-5" id="pricing">
      <h3 className="text-center">Pricing Plans</h3>

      {/* Code for Pricing Cards */}
      <div className="pricing-container d-flex flex-wrap justify-content-center gap-3 p-5">
        {plans.map((plan, index) => {
          return (
            <div
              className={`plan-card  ${plan.popular ? "popular" : ""}`}
              key={index}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h4>{plan.name}</h4>
              <p>{plan.description}</p>
              <div className="price">
                <h2>
                  ${plan.monthly}
                  <span>/month</span>
                </h2>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => {
                  alert("Sign in to continue with TaskFlow");
                  navigate("/signup");
                }}
              >
                {plan.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;
