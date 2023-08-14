import React, { useState, useEffect } from "react";
import "./App.css";
import FalconMenu from "./Components/FalconMenu";
import { SucessPage, FailPage } from "./Components/SucessFailPage";

function App() {
  const [result, setResult] = useState([]);
  const [displayPage, setDisplayPage] = useState(0);

  useEffect(() => {
    if (result.length > 0) {
      if (result[0].status === "success") {
        setDisplayPage(1);
      } else {
        setDisplayPage(2);
      }
    } else {
      setDisplayPage(0);
    }
  }, [result]);

  return (
    <div className="App">
      <div className="queen-background"></div>
      <div className="finding-falcon-heading">FINDING THE FALCON</div>
      {displayPage === 0 ? <FalconMenu setResult={setResult} /> : null}
      {displayPage === 1 ? <SucessPage result={result} /> : null}
      {displayPage === 2 ? <FailPage result={result} /> : null}
    </div>
  );
}

export default App;
