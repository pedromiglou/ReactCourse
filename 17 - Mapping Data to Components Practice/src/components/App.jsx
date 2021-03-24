import React from "react";
import Entry from "./Entry.jsx";
import emojis from "./../emojipedia.js";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
