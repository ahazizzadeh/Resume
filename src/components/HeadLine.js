import React, { Component } from "react";

import { ScrollTo } from "../components/ScrollTo";

import "./HeadLine.css";

export class HeadLine extends Component {
  render() {
    return (
      <div className="headline">
        <div id="image"> 
          <img style={{maxWidth:30}} src="./images/theme.png" onClick={this.props.onClick}
        />
        </div>
        <div>
          <ScrollTo section="about" name="About" />
        </div>
        <div>
          <ScrollTo section="skills" name="Skills" />
        </div>
      </div>
    );
  }
}
