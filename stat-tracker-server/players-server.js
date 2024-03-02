const mysql = require("mysql");

// create connection to mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ethan1875!",
  database: "players",
});

// Connect to the mysql server
connection.connect((err) => {
  if (err) {
    console.error("can't connect:", err.stack);
    return;
  }
  console.log("Connected");

  // test query
  connection.query("SELECT * FROM players", (err, results) => {
    if (err) {
      console.error("Error executing query:", err.stack);
      return;
    }

    // test results
    console.log("Player data:", results);

    // Close connection
    connection.end((err) => {
      if (err) {
        console.error("Error closing connection:", err.stack);
        return;
      }

      console.log("Connection closed");
    });
  });
});
