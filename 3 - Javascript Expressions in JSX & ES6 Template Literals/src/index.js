import React from "react";
import ReactDOM from "react-dom";

const fName = "Pedro";
const lName = "Amaral";

//const luckyNumber = 10;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
