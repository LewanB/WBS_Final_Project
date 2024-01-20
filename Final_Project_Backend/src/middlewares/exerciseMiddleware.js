const client = require("../database/connect_db.js");

const exerciseExists = (req, res, next) => {
  const name = req.params.name;
  //   const clientTest = client();
  client
    .query("SELECT * FROM exercises WHERE name=$1;", [name])
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "exerciseExists -> then",
          error: "Exercise not found",
        });
      }
      req.exercise = data.rows;
      return next();
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ cause: "exerciseExists -> catch", error: err.message });
    });
};

module.exports = {
  exerciseExists,
};
