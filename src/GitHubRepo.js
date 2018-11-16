import React from "react";
import github from "./images/github.svg";

class GitHubRepo extends React.Component {
  render() {
    return (
        <github> 
          <a href={this.props.gitHubRepo}>
            <img src={github} className="small-icon" alt={'github icon'} />
          </a>
        </github>
    )
  }
}

export default GitHubRepo;






