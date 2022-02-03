import React, { useState } from "react";
//useState returns a string/number/(whatever we want)[0] and a function to change it[1] as an array with the given index
const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "Random Title") setText("Hello World");
    else setText("Random Title");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
