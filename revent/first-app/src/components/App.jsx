import React, { useState } from "react";

function App() {
    const [headingText,setHeadingText]= useState("hello");
    const [mouse,setmouse]=useState(false);

    function handleClick(){
        setHeadingText("submitted");
    }

    function over(){
        setmouse(true);
    }
    function out(){
        setmouse(false);
    }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor:mouse?"black":"white"}}
      onClick={handleClick}
      onMouseOver={over}
      onMouseOut={out}>Submit</button>
      
    </div>
  );
}

export default App;
