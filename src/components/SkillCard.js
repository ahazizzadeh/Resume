import React, { Component } from "react";
import "./SkillCard.css";

export class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="row1">
        <div className="img">
          <img src={skill.image} />
        </div>
        <div className="skillImages">
          {" "}
          {skill.items.map((eachOne) => {
            return (
            <div>
              <img src={eachOne.image} />
            </div>);
          })}
        </div>
      </div>
    );
  }
}
