const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.ATLAS_URL,
});

// const connectPostgres = async () => {
//   try {
// const client = () => {
//   pool.connect();
// };
// console.log("Connected to DB successfully :)");
// return client; //Was wird hier returned?
//   } catch (error) {
//     console.log(error);
//   }
// };

// pool.connect((err, client, done) => {
//   if (err) {
//     console.error("Error connecting to the database", err);
//   } else {
//     console.log("Connected to the database");
//   }
// });

module.exports = pool;
