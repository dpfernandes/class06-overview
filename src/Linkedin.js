import React from "react";
import linkedin from "./images/linkedin.svg";


class Linkedin extends React.Component {
  render() {
    return (
        <div > 
          <a href={this.props.linkedin}>
            <img src={linkedin}  className="small-icon" alt={'linkedin logo'} />
          </a>
        </div>

    )
  }
}

export default Linkedin;





