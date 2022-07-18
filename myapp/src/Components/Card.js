


function Card(props){
    return (
      <div className="card">
        <h2 className = "cardTitle">{props.titleText}</h2>
        <h3 className = "cardDesc">{props.desc}</h3>
        <h3 className = "cardFooter">{props.footer}</h3>
      </div>
    )
  }

  export default Card 