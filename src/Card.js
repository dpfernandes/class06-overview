
import React, { Component } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";


class Card extends Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} 
                      image={this.props.details.image}/>
          <CardBody name={this.props.details.name} 
                    gitHubRepo={this.props.details.gitHubRepo}
                    linkedin={this.props.details.linkedin}
                    portfolio={this.props.details.portfolio}/>
                    

        </article>
      )
    }
  }

  export default Card;
