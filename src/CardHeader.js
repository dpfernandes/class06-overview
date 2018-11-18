import React, { Component } from "react";


class CardHeader extends Component {
    render() {  
      return (
        <div>
          <img src={this.props.image}  width="170px" alt={''} />
        </div>
      )
    }
  }
  export default CardHeader;
