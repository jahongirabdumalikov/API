import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="grid grid-cols-1 place-items-center py-3">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <h1 style={{ color: randomColor }}>{text}</h1>
    </div>
  );
}

export default App;
