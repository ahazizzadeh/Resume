import React, { Component } from "react";

import { Element } from "react-scroll";

import { Fullpage } from "../components/Fullpage";
import { ScrollTo } from "../components/ScrollTo";

import data from "../data.json";
import "./FirstView.css";
import "./theme.css"; //pak kardan va ezafe kardan dar yek pooshe dige taghiri ijad nemikonad!!!!!!!!!!!!!//


export class FirstView extends Component {
  render() {
    return (
      <div>
        <Element name="fistview" className="element"></Element>
        <Fullpage className={this.props.theme + "-section1"}>
          <h1
            className="title"
          >
            {data.title}
          </h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <div className="flex row all">
            <div className="flex column1">
              {Object.keys(data.contact).map((key) => {
                return (
                  <img src={`images/${key}.png`} style={{ maxWidth: 30 }} />
                );
              })}
            </div>
            <div className="flex column2">
              {Object.keys(data.contact).map((key) => {
                return <div>{data.contact[key]}</div>;
              })}
            </div>
          </div>
        </Fullpage>
        <div className="arrow">
          <ScrollTo section="about" />
        </div>
      </div>
    );
  }
}
