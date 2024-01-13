require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.ATLAS_URL || 3001;

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT} !`);
});
