const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

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

  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  connection.query(sql, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render("books", { books: data });
    }
  });
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "170614@Ba",
  database: "nodejs_mysql",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL");
  }
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
