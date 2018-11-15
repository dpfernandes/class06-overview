
import React, { Component } from 'react';
import Title from "./Title";
import Card from "./Card";

//Temporarily store data here
const PostsData = [
    {
      "category": "",
      "name": "Marco DeCara ",
      "gitHubRepo": "https://github.com/marcodca/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    },
    {
      "category": "",
      "name": "Zoey Zou",
      "gitHubRepo": "https://github.com/zoeyzou/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "https://zoeyzou.github.io/WebDevZ/",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    },
    {
      "category": "",
      "name": " Zuhair Taha",
      "gitHubRepo": "https://github.com/marcodca/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "https://zuhair-taha-cv.herokuapp.com/",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    },
    {
      "category": "",
      "name": "Md Azizul Huq",
      "gitHubRepo": "https://github.com/marcodca/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    },
    {
      "category": "",
      "name": "Md Mosiur Rahman",
      "gitHubRepo": "https://github.com/marcodca/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    },
    {
      "category": "",
      "name": "Zeeshan Haider",
      "gitHubRepo": "https://github.com/marcodca/",
      "linkedin": "https://www.linkedin.com/in/marco-de-cara-1b409013a/",
      "portfolio": "",
      "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
    }
  ]
  

class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  export default Main;
