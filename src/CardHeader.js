import React, { Component } from "react";


class CardHeader extends Component {
    render() {  
      return (
        <div>
          <img src={this.props.image}  className="profile_image"   width="90px" alt={'profile picture'} />
          <img src={this.props.graph}   className="graph"  width="420px" alt={'contribution graph'} />
        </div>
      )
    }
  }
  export default CardHeader;
