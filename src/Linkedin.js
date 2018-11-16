import React from "react";
import linkedin from "./images/linkedin.svg";


class Linkedin extends React.Component {
  render() {
    return (
        <div > 
        <a href='{PostsData.linkedin}'>
              <img src={linkedin}  className="small-icon" alt={this.props.name} />
        </a>
        {this.props.linkedin}
      </div>

    )
  }
}

export default Linkedin;





