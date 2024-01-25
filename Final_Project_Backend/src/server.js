const express = require("express");

const app = express();
const cors = require("cors");

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
const PORT = 8070;

const exercisesRouter = require("./routers/exercisesRouter");
const setdataRouter = require("./routers/setdataRouter");
const sessionsRouter = require("./routers/sessionsRouter");

app.use(cors());
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/setdata", setdataRouter);
app.use("/sessions", sessionsRouter);

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
