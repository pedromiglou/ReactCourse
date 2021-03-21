import React from "react";
import ReactDOM from "react-dom";
//best way to import:
import pi, { doublePi, triplePi } from "./math.js";
//wildcard import:
//import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
