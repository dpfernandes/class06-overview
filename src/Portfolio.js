
import React, { Component } from "react";
import portfolio from "./images/portfolio.svg";


class Portfolio extends React.Component {
  render() {
    return (
        <div > 
        <a href={'/Main/${name}'}>
              <img src={portfolio}  className="small-icon" alt={this.props.name} />
        </a>
        {this.props.portfolio}
        </div>
    )
  }
}

export default Portfolio;







