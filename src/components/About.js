import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>no content</p>
      <img alt="I made this" src={image}></img>
    </div>
  );
}

export default About;
