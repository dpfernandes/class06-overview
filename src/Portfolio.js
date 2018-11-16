import React from "react";
import portfolio from "./images/portfolio.svg";


class Portfolio extends React.Component {
  render() {
    return (
        <div > 
        <a href={this.props.portfolio}>
          <img src={portfolio} className="small-icon" alt={'portfolio icon'} />
        </a>
        </div>
    )
  }
}

export default Portfolio;







