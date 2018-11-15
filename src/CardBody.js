import React, { Component } from "react";
import GitHubRepo from "./GitHubRepo";
import Linkedin from "./Linkedin";
import Portfolio from "./Portfolio";


class CardBody extends Component {
    render() {
      return (
        <div className="card-body">
          <h2>{this.props.name}</h2>     
        <GitHubRepo/>
        <Linkedin/>
        <Portfolio/>
        </div>
      )
    }
  }
  
  export default CardBody;
