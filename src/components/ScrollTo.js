import React, { Component } from "react";

import { Link, Element } from "react-scroll";

export const ScrollTo = (props) => {
  return (
    console.log(props.section),
    (
      <Link activeClass="active" to={props.section} spy={true} smooth={true}>
        {props.name ? (
          props.name
        ) : (
          props.direction ? (
          <img style={{ maxWidth: 30 }} src="images/up.png" /> 
        ):( <img style={{ maxWidth: 30 }} src="images/down.png" />)
        )}
      </Link>
    )
  );
};
