//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const time = new Date().getHours();

var goodWhat = "";
var myStyle = {
  color: "",
  fontSize: "20px"
};

if (time < 12) {
  goodWhat = "Good morning";
  myStyle.color = "red";
} else if (time < 18) {
  goodWhat = "Good Afternoon";
  myStyle.color = "green";
} else {
  goodWhat = "Good Evening";
  myStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={myStyle}>
      {goodWhat}
    </h1>
  </div>,
  document.getElementById("root")
);
