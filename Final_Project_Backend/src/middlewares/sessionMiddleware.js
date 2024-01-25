const client = require("../database/connect_db.js");
const secureParam = require("../database/sqlsecure.js");

const sessionExists = (req, res, next) => {
  const { id } = secureParam(req.params);

  client
    .query("SELECT id FROM training_sessions WHERE id=$1;", [id])
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "sessionExists Middleware jumps in -> then",
          error: "Session not found",
        });
      }
      req.set = data.rows;
      return next();
    })
    .catch((err) => {
      return res.status(500).json({
        cause: "sessionExists Middleware jumps in -> catch",
        error: err.message,
      });
    });
};

module.exports = {
  sessionExists,
};
