const express = require("express");
const book = express();
const booklist = [
  {
    name: "BhagvatGita",
    author: "Vyasa",
  },
  {
    name: "vishnupurana",
    author: "Chaturvedi Badrinath",
  },
  {
    name: "TenaliRama",
    author: "C. L. L. Jayaprada",
  },
];
book.get("/books", (req, res, next) => {
  res.send(JSON.stringify(booklist));
  console.log("fetching all books");
});
book.get(
  "/books/:name",
  (req, res, next) => {
    let name = req.params.name;
    const data = booklist.filter((el) => el.name == name);
    if (data[0]) {
      res.send(JSON.stringify(data));
    } else {
      next();
    }
  },
  (res, req, next) => {
    res.send("Book is not available");
  }
);

module.exports = book;
