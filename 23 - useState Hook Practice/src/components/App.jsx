import React, { useState } from "react";

function App() {
  var [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 8));

  function autoUpdate() {
    setTime(new Date().toLocaleTimeString().slice(0, 8));
  }
  setInterval(autoUpdate, 1000);

  function getTime() {
    setTime(new Date().toLocaleTimeString().slice(0, 8));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
