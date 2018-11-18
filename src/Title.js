import React from "react";
import hyfDKlogo from './images/hyf_dk_logo.png';

class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <img src={hyfDKlogo} className="hfDKlogo"   width="80px" alt="Hack Your Future"/>
          <h1>Class06 Overview</h1>
        </div>
      </section>
    }
  }

  export default Title;
