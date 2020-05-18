import React, { Component } from "react";

import { Element } from "react-scroll";

import { Fullpage } from "../components/Fullpage";
import { ScrollTo } from "../components/ScrollTo";
import { InfoCard } from "../components/InfoCard";

import data from "../data.json";
import "./AboutSection.css";

export class AboutSection extends Component {
  render() {
    return (
      <div>
        <Element name="about" className="element"></Element>
        <Fullpage className={this.props.theme + "-section2"}>
          <div className="info">
            <div className="title2">
              {" "}
              {/*chera agar title1 bezarim, kari nemikone?????????? title */}
              {data.sections[0].title}
            </div>
            {data.sections[0].items.map((p) => {
              return (
                <div className={this.props.theme + "-info"}>
                  <InfoCard item={p} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <div className="arrowAbout">
          <ScrollTo section="skills" />
        </div>
      </div>
    );
  }
}
