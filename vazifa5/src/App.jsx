import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (numGuess < randomNumber) {
      setMessage("Topomadiz, man o'ylagan son siz aytgan sondan kattaroq");
    } else if (numGuess > randomNumber) {
      setMessage("Topomadiz, man o'ylagan son siz aytgan sondan kichik");
    } else {
      setMessage("Ura, siz topdingiz!");
    }
    setGuess("");
  };

  return (
    <div className="text-center mt-3">
      <Typography variant="h4">Men o'ylagan sonni toping</Typography>
      <div className="flex justify-center items-center gap-2 mt-4">
        <TextField
          label="Sonni kiriting"
          variant="outlined"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button onClick={handleGuess} variant="contained" color="primary">
          Yuborish
        </Button>
      </div>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        {message}
      </Typography>
    </div>
  );
}

export default App;
