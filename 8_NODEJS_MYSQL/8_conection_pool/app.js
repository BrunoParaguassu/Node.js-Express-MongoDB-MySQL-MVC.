const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbooks", (req, res) => {
  const title = req.body.title;
  const page = req.body.page;

  const sql = `INSERT INTO books (title, page) VALUES ('${title}', '${page}')`;

  pool.query(sql, (error) => {
    if (error) throw error;
    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  pool.query(sql, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render("books", { books: data });
    }
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  pool.query(sql, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render("book", { book: data[0] });
    }
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  pool.query(sql, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render("editbook", { book: data[0] });
    }
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const page = req.body.page;

  const sql = `UPDATE books SET title = '${title}', page = '${page}' WHERE id = ${id}`;

  pool.query(sql, (err) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/books");
    }
  });
});

app.post("/books/books/remove/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM books WHERE id = ${id}`;
  pool.query(sql, (err) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/books");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
