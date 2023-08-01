import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [imageNumber, setImageNumber] = useState(1);

  const interval = useRef<NodeJS.Timer>();
  const runStreaming = useCallback(() => {
    interval.current = setInterval(() => {
      setImageNumber((pre) => (pre + 1) % 878);
    }, 100 / 3);
  }, []);

  // useEffect(() => {
    // if (imageNumber > 877) 
    // clearInterval(interval.current);
  // }, [imageNumber]);

  return (
    <div className="App">
      <button onClick={runStreaming}>run {imageNumber}</button>
      <img src={`streaming_data/${imageNumber}.jpg`} alt="streaming" />
    </div>
  );
}

export default App;
