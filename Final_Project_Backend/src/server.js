const express = require("express");

const app = express();

// Test the database connection
const pool = require("./database/connect_db.js");

pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log("Connected to the database");
  }
});

//Start actual server functionality
const PORT = 8080;

const exercisesRouter = require("./routes/exercisesRouter");

// app.use(express.json());
app.use("/exercises", exercisesRouter);

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
