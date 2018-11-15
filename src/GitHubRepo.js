
import React, { Component } from "react";
import github from "./images/github.svg";


class GitHubRepo extends React.Component {
  render() {
    return (
        <div > 
          <a href='{PostsData.gitHubRepo}'>
                <img src={github}  className="small-icon" alt={this.props.name} />
          </a>
          {this.props.gitHubRepo}
        </div>
    )
  }
}

export default GitHubRepo;






