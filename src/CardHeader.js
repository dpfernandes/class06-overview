import React, { Component } from "react";


class CardHeader extends Component {
    render() {
      const { image, category } = this.props;
      var style = {    
                    backgroundImage: 'url(' + image + ')',
      };
      return (
        <div style={style} className="card-header">
          <a>{category}</a>
        </div>
      )
    }
  }
  export default CardHeader;
