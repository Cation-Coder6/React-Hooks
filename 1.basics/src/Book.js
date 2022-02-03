import React from "react";

const Book = ({ author, img, title }) => {
  const clickHandler = () => {
    alert("WOOF");
  };

  const autoRunHandlerProblem = (e) => {
    console.log(e.target); //looks at whatever is clicked on
  };

  return (
    <article className="book">
      <img src={img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Say Hello
      </button>
      {
        //in the following code the clickHandler will be executed as soon as the react app is run
        // <button type="button" onClick={autoRunHandlerProblem(author)}></button>
        //the following line fixes the auto execute problem
        //<button type="button" onClick={() => autoRunHandlerProblem(author)}></button>
      }
      <button type="button" onClick={autoRunHandlerProblem}>
        Auto Run Function Problem
      </button>
    </article>
  );
};

export default Book;
