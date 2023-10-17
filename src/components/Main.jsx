import React from "react";
import { useState } from "react";
import './styling/Main.css'

const Main = () =>{
    

  const [isExpanded, setExpanded] = useState(false);


  const toggleContent = () => {
    setExpanded(!isExpanded);
  };

  return (
    <main className="main-content">
      <h2>  My Name Is Khan </h2>
      <button onClick={toggleContent}>
        {isExpanded ? "Collapse Content" : "Expand Content"}
      </button>
      {isExpanded && (
        <div>
          <p>
            And I AM nOT A TERRORIST
          </p>
        </div>
      )}
    </main>
  );
};


export default Main