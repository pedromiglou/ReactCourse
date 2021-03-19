import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        alt="bacon"
        src="https://exame.com/wp-content/uploads/2020/06/bacon-in-natura.jpg?quality=70&strip=info"
      ></img>
      <img
        alt="jamon"
        src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
      ></img>
      <img
        alt="noodles"
        src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      ></img>
      <img alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
