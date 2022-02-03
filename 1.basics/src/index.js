import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
//importing and exporting components
import { Books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {Books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
