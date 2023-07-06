import { useState } from 'react';
import './App.css';
import FalconMenu from './Components/FalconMenu';
import React from 'react'
import { useEffect } from 'react';
import SucessPage from './Components/SucessPage';
import FailPage from './Components/FailPage';
function App() {
  const [result, setResult] = useState([])
  const [displayPage, setDisplayPage] = useState(0)
  useEffect(() => {
    if(result.length > 0)  {
      if(result[0].status === "success")  {
        setDisplayPage(1)
      } else {
        setDisplayPage(2)
      }
    } else {
      setDisplayPage(0)
    }
  }, result)
  return (
    <div className="App">
        <div className="queen-background"></div>
        <div className="finding-falcon-heading">
            FINDING THE FALCON
        </div>
        {/* {displayPage === 0 ? <FalconMenu setResult = {setResult} /> : ""}
        {displayPage === 1 ? <SucessPage result = {result} /> : ""}
        {displayPage === 2 ? <FailPage result = {result} /> : ""} */}
        <FalconMenu setResult = {setResult}/>
    </div>
  );
}
 
export default App;
