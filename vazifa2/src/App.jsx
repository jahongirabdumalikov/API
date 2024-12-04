import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      setProgress((prev) => Math.min(prev + 5, 1000));
    }, 1000);

    if (progress === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex justify-center items-center gap-8 py-4 ">
      <Typography variant="h5">vaqt: {seconds} seconds</Typography>
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
}

export default App;
