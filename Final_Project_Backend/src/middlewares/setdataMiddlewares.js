const client = require("../database/connect_db.js");
const secureParam = require("../database/sqlsecure.js");

const setdataExists = (req, res, next) => {
  const { sessionid } = secureParam(req.params);

  client
    .query("SELECT id FROM setdata WHERE sessionID=$1;", [sessionid])
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "setdataExists Middleware jumps in -> then",
          error: "Set not found",
        });
      }
      req.set = data.rows;
      return next();
    })
    .catch((err) => {
      return res.status(500).json({
        cause: "setdataExists Middleware jumps in -> catch",
        error: err.message,
      });
    });
};

module.exports = {
  setdataExists,
};
