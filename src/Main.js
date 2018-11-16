import React from 'react';
import Title from "./Title";
import Card from "./Card";
import PostList from "./PostList";


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
    "linkedin": "https://www.linkedin.com/in/zoeyzou2018/",
    "portfolio": "https://zoeyzou.github.io/WebDevZ/",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": " Zuhair Taha",
    "gitHubRepo": "https://github.com/zuhairtaha",
    "linkedin": "https://www.linkedin.com/in/zuhairtaha/ ",
    "portfolio": "https://zuhair-taha-cv.herokuapp.com/",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Md Azizul Huq",
    "gitHubRepo": " https://github.com/asumon",
    "linkedin": "https://www.linkedin.com/in/dkaziz/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Md Mosiur Rahman",
    "gitHubRepo": " https://github.com/mdmosiurrahman",
    "linkedin": "https://www.linkedin.com/in/mosiur-rahman-860857148/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Zeeshan Haider",
    "gitHubRepo": " https://github.com/ZeeshanHaider2",
    "linkedin": "https://www.linkedin.com/in/zeeshan-haider-ba8310163/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Krishna Rana",
    "gitHubRepo": "https://github.com/krishnarrana",
    "linkedin": "https://www.linkedin.com/in/krishnarana2121/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Adbulla Ali",
    "gitHubRepo": "https://github.com/T1ish/",
    "linkedin": "",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Matthew Breedon",
    "gitHubRepo": "https://github.com/Breedon-M",
    "linkedin": "https://www.linkedin.com/in/matthew-breedon/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Yousof Mersal(Joe)",
    "gitHubRepo": " https://github.com/YousofMersal/",
    "linkedin": "",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Nirmala Thapa (Neer)",
    "gitHubRepo": "https://github.com/nirmalathapa",
    "linkedin": "https://www.linkedin.com/in/nirmalathapa/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Javad Zamani ",
    "gitHubRepo": "https://github.com/JVDZMN",
    "linkedin": "https://www.linkedin.com/in/javad-zamani-047350111/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Ibrahim Salah",
    "gitHubRepo": "https://github.com/ibrsal/",
    "linkedin": "https://www.linkedin.com/in/ibrahim-salah-432264171/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=460&v=4"
  },
  {
    "category": "",
    "name": "Anowar Uddin",
    "gitHubRepo": "https://github.com/smauddin/",
    "linkedin": "https://www.linkedin.com/in/s-m-anowar-uddin-60ab0473/",
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
