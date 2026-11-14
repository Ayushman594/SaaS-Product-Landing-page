const features= [
    {
      "icon": "📋",
      "title": "Smart Task Management",
      "description": "Create, organize and prioritize tasks easily."
    },
    {
      "icon": "👥",
      "title": "Team Collaboration",
      "description": "Connect with your team and work together."
    },
    {
      "icon": "📊",
      "title": "Progress Tracking",
      "description": "Monitor project progress and performance."
    },
    {
      "icon": "📅",
      "title": "Deadline Management",
      "description": "Never miss an important deadline."
    },
    {
      "icon": "🔔",
      "title": "Instant Notifications",
      "description": "Stay updated with important activities."
    },
    {
      "icon": "📈",
      "title": "Reports & Analytics",
      "description": "Understand productivity through reports."
    }
  ]

function Features() {
  return (
    <>
       <section className="features-section" id="features">
         <h3 className="text-center">Our Features</h3>

         {/* Feature cards logic */}
         <div className="features-container d-flex flex-wrap justify-content-center gap-3 p-5">
            {features.map((feature, index)=>{
                return (
                    <div className="feature-card border border-dark rounded p-3 gap-3" key={index}>
                        <p className="text-center fs-2">{feature.icon}</p>
                        <h4 className="text-center">{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                )
            })}
         </div>
      </section>
    </>
  )
}

export default Features

