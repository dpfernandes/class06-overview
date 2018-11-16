import React, { Component } from "react";
import GitHubRepo from "./GitHubRepo";
import Linkedin from "./Linkedin";
import Portfolio from "./Portfolio";


class CardBody extends Component {
    render() {
      const {gitHubRepo, linkedin, portfolio} = this.props
      return (
        <div className="card-body">
          <h2>{this.props.name}</h2>     
          <GitHubRepo gitHubRepo={gitHubRepo} />
          <Linkedin linkedin={linkedin} />
          <Portfolio portfolio={portfolio} />
        </div>
      )
    }
  }
  
  export default CardBody;
