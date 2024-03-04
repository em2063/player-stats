const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

// Create connection to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ethan1875!",
  database: "players",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.log("Can't connect:", err);
    return;
  }
  console.log("Connected");
});

// Define a route to fetch data
app.get("/players", (req, res) => {
  // Perform the desired query
  connection.query("SELECT * FROM players", (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Send the results as JSON
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("listening on local host");
});
