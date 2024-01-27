const client = require("../../database/connect_db.js");
const secureParam = require("../../database/sqlsecure.js");

const exerciseExists = (req, res, next) => {
  const { name } = secureParam(req.params);
  name.replace("%20", " ");

  //   const clientTest = client();
  client
    .query("SELECT * FROM exercises WHERE name=$1;", [name])
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "exerciseExists Middleware jumps in -> then",
          error: "Exercise not found",
        });
      }
      req.exercise = data.rows;
      return next();
    })
    .catch((err) => {
      return res.status(500).json({
        cause: "exerciseExists Middleware jumps in -> catch",
        error: err.message,
      });
    });
};

module.exports = {
  exerciseExists,
};
