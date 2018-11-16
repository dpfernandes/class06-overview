import React from "react";
import github from "./images/github.svg";

class GitHubRepo extends React.Component {
  render() {


    return (

         <github> 
           <a href='{PostsData.gitHubRepo}'>
                 <img src={github}  className="small-icon" alt={this.props.name} />
                 <check>&#9989;</check>
                 <uncheck>&#x274C;</uncheck>
           </a>
           {this.props.gitHubRepo}
         </github>

                    

    )
  }
}

export default GitHubRepo;






