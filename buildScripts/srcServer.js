import express from "express";
import path from "path";
import open from "open";

const port = 3000;
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    {
      id: 2,
      firstName: "Tammy",
      lastName: "Worton",
      email: "tnorton@yahoo.com"
    },
    { id: 3, firstName: "Tina", lastName: "Lee", email: "lee.tina@hotmail.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
