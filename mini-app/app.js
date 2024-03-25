const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//Mongo DB connection
const db = process.env.MONGOLAB_URI;
mongoose
  .connect(db, {})
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/login"));

app.get("/", (req, res) => {
  res.send("Hello Jeongmin");
  console.log("Successfully get the main page");
});

app.get("/urls.json", (req, res) => {
  res.status(200);
});

app.get("/hello", (req, res) => {
  res.send("<html><h1>Hello</h1></html>");
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.get("/urls/:id", (req, res) => {
  const id = req.body.id;
  res.send(`Hello ${id} This is your page when logged in`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
