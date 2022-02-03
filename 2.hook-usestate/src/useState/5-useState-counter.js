import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };
  return (
    <React.Fragment>
      <div className="basic" style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          Reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </div>
      <div className="complex" style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateCounter;
