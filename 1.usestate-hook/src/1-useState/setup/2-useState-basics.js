import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState("hello world"));
  const [text, setText] = useState("random title");
  const handleClick = () => {
    const newText = text === "random title" ? "hello world" : "random title";
    setText(newText);
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
