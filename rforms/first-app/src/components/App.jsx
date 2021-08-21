import React, { useState } from "react";

function App() {
     
    const [name, setName]=useState("")
    const [head, setHead]=useState("")

    function handleChange(event){
        setName(event.target.value);
    }

    function handleClick(){
        setHead(name);
    }
  return (
    <div className="container">
      <h1>Hello {head}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
