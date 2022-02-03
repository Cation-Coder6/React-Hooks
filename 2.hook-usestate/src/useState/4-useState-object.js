import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });
  // const changeMessage = () => {
  //   const { name, age } = person;
  //   const message = "Changed Message!";
  //   setPerson({ name, age, message });
  // };
  // better approach below
  const changeMessage = () => {
    setPerson({ ...person, message: "Changed Message" });
  };
  console.log(person);

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
