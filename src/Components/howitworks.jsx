const Steps=[{
    icon:"📝",
    title:"Step 1",
    description:"Create an account and log in to access your personalized dashboard."
},{
    icon:"📁",
    title:"Step 2",
    description:"Create a new project and set up your tasks, deadlines, and team members."
},{
    icon:'✅',
    title:"Step 3",
    description:"Track your progress, collaborate with your team, and complete tasks efficiently."
},{
    icon:"📊",
    title:"Step 4",
    description:"Generate reports and analyze your productivity to improve your workflow.",
}]

function howitworks() {
  return (
    <>
      <section className="howitworks-section" id="how-it-works">
        <h3 className="text-center">How TaskFlow Works</h3>

        { /* steps card logic */} 
        <div className="steps-container d-flex flex-wrap justify-content-center gap-3 p-5">
            {Steps.map((step,index)=>{
                return (
                    <div className="step-card border border-dark rounded p-3 gap-3" key={index}>
                        <p className="text-center fs-2">{step.icon}</p>
                        <h4 className="text-center">{step.title}</h4>
                        <p>{step.description}</p>
                    </div>
                )
            })}
        </div>  
      </section>  
    </>
  )
}

export default howitworks
