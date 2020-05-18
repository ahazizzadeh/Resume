import React , {Component} from "react";

import SnowStorm from 'react-snowstorm';

import { FirstView } from "./sections/FirstView";
import { AboutSection } from "./sections/AboutSection.js";
import { SkillSection } from "./sections/SkillsSection";
import { HeadLine } from "./components/HeadLine";


import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {version : 1, theme : "version1"}
  }

  changeTheme = () => {
    let i = this.state.version;
    i === 5 ? i=1 : i++;
    let version = "version"+i;
    this.setState({version : i});
    console.log("version is "+version)
    this.setState({theme : version});
  }

  render(){
  return (
  <div className="App">
      <HeadLine onClick={this.changeTheme}/>
      <div>
				<SnowStorm />
        <FirstView theme={this.state.theme}/>
			</div>
      <AboutSection theme={this.state.theme}/>
      <SkillSection theme={this.state.theme}/>
    </div>
  );
  }
}

export default App;