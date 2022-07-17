
const header = "Ruhul Application"
const title = "simple Title"
const description = "TODO Description"
const footer = "this is footer section"

function Card(){
    return (
      <div className="card">
        <h2 className = "cardTitle">{title}</h2>
        <h3 className = "cardDesc">{description}</h3>
        <h3 className = "cardFooter">{footer}</h3>
      </div>
    )
  }

  export default Card 