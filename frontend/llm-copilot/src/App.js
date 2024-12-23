import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <Navbar />
      <InputBox onResponse={setResult} />
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
