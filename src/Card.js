
import React, { Component } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";


class Card extends Component {
    render() {
      const {details} = this.props
      return (
        <article className="card" >
          <CardHeader  
            category={details.category} 
            image={details.image}
            graph={details.graph}/>

          <CardBody 
            name={details.name} 
            gitHubRepo={details.gitHubRepo}
            linkedin={details.linkedin}
            portfolio={details.portfolio}
          />
      
        </article>
      )
    }
  }

  export default Card;
