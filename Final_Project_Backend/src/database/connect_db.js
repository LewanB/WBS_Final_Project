const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.ATLAS_URL,
});

module.exports = pool;
