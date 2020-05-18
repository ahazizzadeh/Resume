import React, { Component } from "react";

import { Element } from "react-scroll";

import { Fullpage } from "../components/Fullpage";
import { SkillCard } from "../components/SkillCard";
import { ScrollTo } from "../components/ScrollTo";

import data from "../data.json";
import "./SkillsSection.css";

export class SkillSection extends Component {
  render() {
    return (
      <div>
        <Element name="skills" className="element"></Element>
        <Fullpage className={this.props.theme + "-section3"}>      
          
          <div className="skills">
          <div className="title1">    
            {data.sections[1].title}
          </div>
            {data.sections[1].items.map((eachSkill) => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
          <div className="arrowSkills">
          <ScrollTo section="fistview" direction="top" />
        </div>
        </Fullpage>
        
      </div>
    );
  }
}
