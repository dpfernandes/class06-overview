import React from 'react';
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
    "image": "https://avatars1.githubusercontent.com/u/38817334?s=90&v=4",
    "graph": "http://ghchart.rshah.org/marcodca"    
  },
  {
    "category": "",
    "name": "Zoey Zou",
    "gitHubRepo": "https://github.com/zoeyzou/",
    "linkedin": "https://www.linkedin.com/in/zoeyzou2018/",
    "portfolio": "https://zoeyzou.github.io/WebDevZ/",
    "image": "https://avatars3.githubusercontent.com/u/13701719?s=90&v=4",
    "graph": "http://ghchart.rshah.org/zoeyzou"
  },
  {
    "category": "",
    "name": " Zuhair Taha",
    "gitHubRepo": "https://github.com/zuhairtaha",
    "linkedin": "https://www.linkedin.com/in/zuhairtaha/ ",
    "portfolio": "https://zuhair-taha-cv.herokuapp.com/",
    "image": "https://avatars2.githubusercontent.com/u/955233?s=90&v=4",
    "graph": "http://ghchart.rshah.org/zuhairtaha"
  },
  {
    "category": "",
    "name": "Md Azizul Huq",
    "gitHubRepo": " https://github.com/asumon",
    "linkedin": "https://www.linkedin.com/in/dkaziz/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/19579958?s=90&v=4",
    "graph": "http://ghchart.rshah.org/asumon"

  },
  {
    "category": "",
    "name": "Md Mosiur Rahman",
    "gitHubRepo": " https://github.com/mdmosiurrahman",
    "linkedin": "https://www.linkedin.com/in/mosiur-rahman-860857148/",
    "portfolio": "",
    "image": "https://avatars1.githubusercontent.com/u/32566240?s=90&v=4",
    "graph": "http://ghchart.rshah.org/mdmosiurrahman"

  },
  {
    "category": "",
    "name": "Zeeshan Haider",
    "gitHubRepo": " https://github.com/ZeeshanHaider2",
    "linkedin": "https://www.linkedin.com/in/zeeshan-haider-ba8310163/",
    "portfolio": "",
    "image": "https://avatars2.githubusercontent.com/u/39421284?s=90&v=4",
    "graph": "http://ghchart.rshah.org/ZeeshanHaider2"

  },
  {
    "category": "",
    "name": "Krishna Rana",
    "gitHubRepo": "https://github.com/krishnarrana",
    "linkedin": "https://www.linkedin.com/in/krishnarana2121/",
    "portfolio": "",
    "image": "https://avatars0.githubusercontent.com/u/38383294?s=90&v=4",
    "graph": "http://ghchart.rshah.org/krishnarrana"

  },
  {
    "category": "",
    "name": "Adbulla Ali",
    "gitHubRepo": "https://github.com/T1ish/",
    "linkedin": "",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/19361362?s=90&v=4",
    "graph": "http://ghchart.rshah.org/T1ish"
  },
  {
    "category": "",
    "name": "Matthew Breedon",
    "gitHubRepo": "https://github.com/Breedon-M",
    "linkedin": "https://www.linkedin.com/in/matthew-breedon/",
    "portfolio": "",
    "image": "https://avatars1.githubusercontent.com/u/37554093?s=90&v=4",
    "graph": "http://ghchart.rshah.org/Breedon-M"
  },
  {
    "category": "",
    "name": "Yousof Mersal(Joe)",
    "gitHubRepo": " https://github.com/YousofMersal/",
    "linkedin": "",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/29578565?s=90&v=4",
    "graph": "http://ghchart.rshah.org/YousofMersal"
  },
  {
    "category": "",
    "name": "Nirmala Thapa (Neer)",
    "gitHubRepo": "https://github.com/nirmalathapa",
    "linkedin": "https://www.linkedin.com/in/nirmalathapa/",
    "portfolio": "",
    "image": "https://avatars2.githubusercontent.com/u/1160546?s=90&v=4",
    "graph": "http://ghchart.rshah.org/nirmalathapa"
  },
  {
    "category": "",
    "name": "Javad Zamani ",
    "gitHubRepo": "https://github.com/JVDZMN",
    "linkedin": "https://www.linkedin.com/in/javad-zamani-047350111/",
    "portfolio": "",
    "image": "https://avatars2.githubusercontent.com/u/32614797?s=90&v=4",
    "graph": "http://ghchart.rshah.org/JVDZMN"
  },
  {
    "category": "",
    "name": "Ibrahim Salah",
    "gitHubRepo": "https://github.com/ibrsal/",
    "linkedin": "https://www.linkedin.com/in/ibrahim-salah-432264171/",
    "portfolio": "",
    "image": "https://avatars3.githubusercontent.com/u/32614855?s=90&v=4",
    "graph": "http://ghchart.rshah.org/ibrsal"
  }
]





class Main extends React.Component { 

    constructor() {
      super();
      this.state = {
        posts: [...PostsData]
      }
    }
  
    render() {
      return (
          <div>
            <header className="app-header"></header>
            <Title />
            <div className="app-card-list" id="app-card-list">
              {
                this.state.posts.map((post, index) => <Card key={index} index={index} details={post}/>)
              }
            </div>
          </div>
      )
    }
  }
  export default Main;
