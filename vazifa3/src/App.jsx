import React, { useState, useEffect } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBgColor(randomColor);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
     
    </div>
  );
}

export default App;
