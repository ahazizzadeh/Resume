import React, { Component } from "react";
import "./InfoCard.css"

export class InfoCard extends Component {
  
  render() {
    const { item } = this.props;
    return (
      <dev className="infoCard">
        <dev className="TitleInfoCard">{item.title}</dev>
        <dev>
          {item.item.map((p) => {
            return (
              <div className="ContentInfoCard">
                <div className="ContentInfoCard-title">{p.info}</div>
                <div className="ContentInfoCard-content">{p.amount}</div> 
              </div>
            );
          })}
        </dev>
      </dev>
    );
  }
}
